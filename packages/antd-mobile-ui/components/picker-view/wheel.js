import React, { memo, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag, useWheel } from '@use-gesture/react';
import { rubberbandIfOutOfBounds } from '../../utils/rubberband';
import { bound } from '../../utils/bound';
import isEqual from 'lodash/isEqual';
import { useIsomorphicLayoutEffect } from 'ahooks';
import { measureCSSLength } from '../../utils/measure-css-length';
import { supportsPassive } from '../../utils/supports-passive';
const classPrefix = `adm-picker-view`;
export const Wheel = memo(props => {
  const {
    value,
    column,
    renderLabel
  } = props;

  function onSelect(val) {
    props.onSelect(val, props.index);
  }

  const [{
    y
  }, api] = useSpring(() => ({
    from: {
      y: 0
    },
    config: {
      tension: 400,
      mass: 0.8
    }
  }));
  const draggingRef = useRef(false);
  const rootRef = useRef(null);
  const itemHeight = useRef(34);
  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    itemHeight.current = measureCSSLength(window.getComputedStyle(root).getPropertyValue('--item-height'));
  });
  useIsomorphicLayoutEffect(() => {
    if (draggingRef.current) return;
    if (!value) return;
    const targetIndex = column.findIndex(item => item.value === value);
    if (targetIndex < 0) return;
    const finalPosition = targetIndex * -itemHeight.current;
    api.start({
      y: finalPosition,
      immediate: y.goal !== finalPosition
    });
  }, [value, column]);
  useIsomorphicLayoutEffect(() => {
    if (column.length === 0) {
      if (value !== null) {
        onSelect(null);
      }
    } else {
      if (!column.some(item => item.value === value)) {
        const firstItem = column[0];
        onSelect(firstItem.value);
      }
    }
  }, [column, value]);

  function scrollSelect(index) {
    const finalPosition = index * -itemHeight.current;
    api.start({
      y: finalPosition
    });
    const item = column[index];
    if (!item) return;
    onSelect(item.value);
  }

  const handleDrag = state => {
    draggingRef.current = true;
    const min = -((column.length - 1) * itemHeight.current);
    const max = 0;

    if (state.last) {
      draggingRef.current = false;
      const position = state.offset[1] + state.velocity[1] * state.direction[1] * 50;
      const targetIndex = min < max ? -Math.round(bound(position, min, max) / itemHeight.current) : 0;
      scrollSelect(targetIndex);
    } else {
      const position = state.offset[1];
      api.start({
        y: rubberbandIfOutOfBounds(position, min, max, itemHeight.current * 50, 0.2)
      });
    }
  };

  useDrag(state => {
    state.event.stopPropagation();
    handleDrag(state);
  }, {
    axis: 'y',
    from: () => [0, y.get()],
    filterTaps: true,
    pointer: {
      touch: true
    },
    target: rootRef
  });
  useWheel(state => {
    state.event.stopPropagation();
    handleDrag(state);
  }, {
    axis: 'y',
    from: () => [0, y.get()],
    preventDefault: true,
    target: props.mouseWheel ? rootRef : undefined,
    eventOptions: supportsPassive ? {
      passive: false
    } : false
  });
  let selectedIndex = null;

  function renderAccessible() {
    if (selectedIndex === null) {
      return null;
    }

    const current = column[selectedIndex];
    const previousIndex = selectedIndex - 1;
    const nextIndex = selectedIndex + 1;
    const previous = column[previousIndex];
    const next = column[nextIndex];
    return React.createElement("div", {
      className: 'adm-picker-view-column-accessible'
    }, React.createElement("div", {
      className: 'adm-picker-view-column-accessible-current',
      role: 'button',
      "aria-label": current ? `当前选择的是：${current.label}` : '当前未选择'
    }, "-"), React.createElement("div", {
      className: 'adm-picker-view-column-accessible-button',
      onClick: () => {
        if (!previous) return;
        scrollSelect(previousIndex);
      },
      role: previous ? 'button' : 'text',
      "aria-label": !previous ? '没有上一项' : `选择上一项：${previous.label}`
    }, "-"), React.createElement("div", {
      className: 'adm-picker-view-column-accessible-button',
      onClick: () => {
        if (!next) return;
        scrollSelect(nextIndex);
      },
      role: next ? 'button' : 'text',
      "aria-label": !next ? '没有下一项' : `选择下一项：${next.label}`
    }, "-"));
  }

  return React.createElement("div", {
    className: `${classPrefix}-column`
  }, React.createElement(animated.div, {
    ref: rootRef,
    style: {
      translateY: y
    },
    className: `${classPrefix}-column-wheel`,
    "aria-hidden": true
  }, column.map((item, index) => {
    var _a;

    const selected = props.value === item.value;
    if (selected) selectedIndex = index;

    function handleClick() {
      draggingRef.current = false;
      scrollSelect(index);
    }

    return React.createElement("div", {
      key: (_a = item.key) !== null && _a !== void 0 ? _a : item.value,
      "data-selected": item.value === value,
      className: `${classPrefix}-column-item`,
      onClick: handleClick,
      "aria-hidden": !selected,
      "aria-label": selected ? 'active' : ''
    }, React.createElement("div", {
      className: `${classPrefix}-column-item-label`
    }, renderLabel(item)));
  })), renderAccessible());
}, (prev, next) => {
  if (prev.index !== next.index) return false;
  if (prev.value !== next.value) return false;
  if (prev.onSelect !== next.onSelect) return false;

  if (!isEqual(prev.column, next.column)) {
    return false;
  }

  return true;
});
Wheel.displayName = 'Wheel';