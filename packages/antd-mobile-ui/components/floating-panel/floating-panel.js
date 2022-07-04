import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { withNativeProps } from '../../utils/native-props';
import { useDrag } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';
import { supportsPassive } from '../../utils/supports-passive';
import { nearest } from '../../utils/nearest';
import { mergeProps } from '../../utils/with-default-props';
import { useLockScroll } from '../../utils/use-lock-scroll';
import { useMemoizedFn } from 'ahooks';
const defaultProps = {
  handleDraggingOfContent: true
};
export const FloatingPanel = forwardRef((p, ref) => {
  var _a, _b;

  const props = mergeProps(defaultProps, p);
  const {
    anchors
  } = props;
  const maxHeight = (_a = anchors[anchors.length - 1]) !== null && _a !== void 0 ? _a : window.innerHeight;
  const possibles = anchors.map(x => -x);
  const elementRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const [pulling, setPulling] = useState(false);
  const pullingRef = useRef(false);
  const bounds = {
    top: possibles[possibles.length - 1],
    bottom: possibles[0]
  };
  const onHeightChange = useMemoizedFn((_b = props.onHeightChange) !== null && _b !== void 0 ? _b : () => {});
  const [{
    y
  }, api] = useSpring(() => ({
    y: bounds.bottom,
    config: {
      tension: 300
    },
    onChange: result => {
      onHeightChange(-result.value.y, y.isAnimating);
    }
  }));
  useDrag(state => {
    const [, offsetY] = state.offset;

    if (state.first) {
      const target = state.event.target;
      const header = headerRef.current;

      if (header === target || (header === null || header === void 0 ? void 0 : header.contains(target))) {
        pullingRef.current = true;
      } else {
        if (!props.handleDraggingOfContent) return;
        const reachedTop = y.goal <= bounds.top;
        const content = contentRef.current;
        if (!content) return;

        if (reachedTop) {
          if (content.scrollTop <= 0 && state.direction[1] > 0) {
            pullingRef.current = true;
          }
        } else {
          pullingRef.current = true;
        }
      }
    }

    setPulling(pullingRef.current);
    if (!pullingRef.current) return;
    const {
      event
    } = state;

    if (event.cancelable) {
      event.preventDefault();
    }

    event.stopPropagation();
    let nextY = offsetY;

    if (state.last) {
      pullingRef.current = false;
      setPulling(false);
      nextY = nearest(possibles, offsetY);
    }

    api.start({
      y: nextY
    });
  }, {
    axis: 'y',
    bounds,
    rubberband: true,
    from: () => [0, y.get()],
    pointer: {
      touch: true
    },
    target: elementRef,
    eventOptions: supportsPassive ? {
      passive: false
    } : false
  });
  useImperativeHandle(ref, () => ({
    setHeight: (height, options) => {
      api.start({
        y: -height,
        immediate: options === null || options === void 0 ? void 0 : options.immediate
      });
    }
  }), [api]);
  useLockScroll(elementRef, true);
  return withNativeProps(props, React.createElement(animated.div, {
    ref: elementRef,
    className: 'adm-floating-panel',
    style: {
      height: maxHeight,
      translateY: y.to(y => `calc(100% + (${y}px))`)
    }
  }, React.createElement("div", {
    className: 'adm-floating-panel-mask',
    style: {
      display: pulling ? 'block' : 'none'
    }
  }), React.createElement("div", {
    className: 'adm-floating-panel-header',
    ref: headerRef
  }, React.createElement("div", {
    className: 'adm-floating-panel-bar'
  })), React.createElement("div", {
    className: 'adm-floating-panel-content',
    ref: contentRef
  }, props.children)));
});