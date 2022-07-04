import React, { useRef } from 'react';
import classNames from 'classnames';
import { useSpring, animated } from '@react-spring/web';
import { withNativeProps } from '../../utils/native-props';
import { usePropsValue } from '../../utils/use-props-value';
import { bound } from '../../utils/bound';
import { useThrottleFn, useIsomorphicLayoutEffect } from 'ahooks';
import { useMutationEffect } from '../../utils/use-mutation-effect';
import { useResizeEffect } from '../../utils/use-resize-effect';
import { mergeProps } from '../../utils/with-default-props';
import { useIsomorphicUpdateLayoutEffect } from '../../utils/use-isomorphic-update-layout-effect';
import { ShouldRender } from '../../utils/should-render';
import { traverseReactNode } from '../../utils/traverse-react-node';
const classPrefix = `adm-tabs`;
export const Tab = () => {
  return null;
};
const defaultProps = {
  activeLineMode: 'auto',
  stretch: true
};
export const Tabs = p => {
  var _a;

  const props = mergeProps(defaultProps, p);
  const tabListContainerRef = useRef(null);
  const activeLineRef = useRef(null);
  const keyToIndexRecord = {};
  let firstActiveKey = null;
  const panes = [];
  traverseReactNode(props.children, (child, index) => {
    if (!React.isValidElement(child)) return;
    const key = child.key;
    if (typeof key !== 'string') return;

    if (index === 0) {
      firstActiveKey = key;
    }

    const length = panes.push(child);
    keyToIndexRecord[key] = length - 1;
  });
  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: (_a = props.defaultActiveKey) !== null && _a !== void 0 ? _a : firstActiveKey,
    onChange: v => {
      var _a;

      if (v === null) return;
      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, v);
    }
  });
  const [{
    x,
    width
  }, api] = useSpring(() => ({
    x: 0,
    width: 0,
    config: {
      tension: 300,
      clamp: true
    }
  }));
  const [{
    scrollLeft
  }, scrollApi] = useSpring(() => ({
    scrollLeft: 0,
    config: {
      tension: 300,
      clamp: true
    }
  }));
  const [{
    leftMaskOpacity,
    rightMaskOpacity
  }, maskApi] = useSpring(() => ({
    leftMaskOpacity: 0,
    rightMaskOpacity: 0,
    config: {
      clamp: true
    }
  }));

  function animate(immediate = false) {
    const container = tabListContainerRef.current;
    if (!container) return;
    const activeIndex = keyToIndexRecord[activeKey];

    if (activeIndex === undefined) {
      api.start({
        x: 0,
        width: 0,
        immediate: true
      });
      return;
    }

    const activeLine = activeLineRef.current;
    if (!activeLine) return;
    const activeTabWrapper = container.children.item(activeIndex + 1);
    const activeTab = activeTabWrapper.children.item(0);
    const activeTabLeft = activeTab.offsetLeft;
    const activeTabWidth = activeTab.offsetWidth;
    const activeTabWrapperLeft = activeTabWrapper.offsetLeft;
    const activeTabWrapperWidth = activeTabWrapper.offsetWidth;
    const containerWidth = container.offsetWidth;
    const containerScrollWidth = container.scrollWidth;
    const containerScrollLeft = container.scrollLeft;
    const activeLineWidth = activeLine.offsetWidth;
    let x = 0;
    let width = 0;

    if (props.activeLineMode === 'auto') {
      x = activeTabLeft;
      width = activeTabWidth;
    } else if (props.activeLineMode === 'full') {
      x = activeTabWrapperLeft;
      width = activeTabWrapperWidth;
    } else {
      x = activeTabLeft + (activeTabWidth - activeLineWidth) / 2;
    }

    api.start({
      x,
      width,
      immediate
    });
    const maxScrollDistance = containerScrollWidth - containerWidth;
    if (maxScrollDistance <= 0) return;
    const nextScrollLeft = bound(activeTabLeft - (containerWidth - activeTabWidth) / 2, 0, containerScrollWidth - containerWidth);
    scrollApi.start({
      scrollLeft: nextScrollLeft,
      from: {
        scrollLeft: containerScrollLeft
      },
      immediate
    });
  }

  useIsomorphicLayoutEffect(() => {
    animate(!x.isAnimating);
  }, []);
  useIsomorphicUpdateLayoutEffect(() => {
    animate();
  }, [activeKey]);
  useResizeEffect(() => {
    animate(!x.isAnimating);
  }, tabListContainerRef);
  useMutationEffect(() => {
    animate(!x.isAnimating);
  }, tabListContainerRef, {
    subtree: true,
    childList: true,
    characterData: true
  });
  const {
    run: updateMask
  } = useThrottleFn((immediate = false) => {
    const container = tabListContainerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const showLeftMask = scrollLeft > 0;
    const showRightMask = scrollLeft + container.offsetWidth < container.scrollWidth;
    maskApi.start({
      leftMaskOpacity: showLeftMask ? 1 : 0,
      rightMaskOpacity: showRightMask ? 1 : 0,
      immediate
    });
  }, {
    wait: 100,
    trailing: true,
    leading: true
  });
  useIsomorphicLayoutEffect(() => {
    updateMask(true);
  }, []);
  return withNativeProps(props, React.createElement("div", {
    className: classPrefix
  }, React.createElement("div", {
    className: `${classPrefix}-header`
  }, React.createElement(animated.div, {
    className: classNames(`${classPrefix}-header-mask`, `${classPrefix}-header-mask-left`),
    style: {
      opacity: leftMaskOpacity
    }
  }), React.createElement(animated.div, {
    className: classNames(`${classPrefix}-header-mask`, `${classPrefix}-header-mask-right`),
    style: {
      opacity: rightMaskOpacity
    }
  }), React.createElement(animated.div, {
    className: `${classPrefix}-tab-list`,
    ref: tabListContainerRef,
    scrollLeft: scrollLeft,
    onScroll: updateMask
  }, React.createElement(animated.div, {
    ref: activeLineRef,
    className: `${classPrefix}-tab-line`,
    style: {
      width: props.activeLineMode === 'fixed' ? 'var(--fixed-active-line-width, 30px)' : width,
      x
    }
  }), panes.map(pane => withNativeProps(pane.props, React.createElement("div", {
    key: pane.key,
    className: classNames(`${classPrefix}-tab-wrapper`, {
      [`${classPrefix}-tab-wrapper-stretch`]: props.stretch
    })
  }, React.createElement("div", {
    onClick: () => {
      const {
        key
      } = pane;
      if (pane.props.disabled) return;

      if (key === undefined || key === null) {
        return;
      }

      setActiveKey(key.toString());
    },
    className: classNames(`${classPrefix}-tab`, {
      [`${classPrefix}-tab-active`]: pane.key === activeKey,
      [`${classPrefix}-tab-disabled`]: pane.props.disabled
    })
  }, pane.props.title)))))), panes.map(pane => {
    if (pane.props.children === undefined) {
      return null;
    }

    const active = pane.key === activeKey;
    return React.createElement(ShouldRender, {
      key: pane.key,
      active: active,
      forceRender: pane.props.forceRender,
      destroyOnClose: pane.props.destroyOnClose
    }, React.createElement("div", {
      className: `${classPrefix}-content`,
      style: {
        display: active ? 'block' : 'none'
      }
    }, pane.props.children));
  })));
};