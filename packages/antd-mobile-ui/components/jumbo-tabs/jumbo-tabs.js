import React, { useRef } from 'react';
import classNames from 'classnames';
import { animated } from '@react-spring/web';
import { withNativeProps } from '../../utils/native-props';
import { usePropsValue } from '../../utils/use-props-value';
import { useResizeEffect } from '../../utils/use-resize-effect';
import { useTabListScroll } from '../../utils/use-tab-list-scroll';
import ScrollMask from '../scroll-mask';
import { ShouldRender } from '../../utils/should-render';
import { traverseReactNode } from '../../utils/traverse-react-node';
const classPrefix = `adm-jumbo-tabs`;
export const JumboTab = () => {
  return null;
};
export const JumboTabs = props => {
  var _a;

  const tabListContainerRef = useRef(null);
  const rootRef = useRef(null);
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
  const {
    scrollLeft,
    animate
  } = useTabListScroll(tabListContainerRef, keyToIndexRecord[activeKey]);
  useResizeEffect(() => {
    animate(true);
  }, rootRef);
  return withNativeProps(props, React.createElement("div", {
    className: classPrefix,
    ref: rootRef
  }, React.createElement("div", {
    className: `${classPrefix}-header`
  }, React.createElement(ScrollMask, {
    scrollTrackRef: tabListContainerRef
  }), React.createElement(animated.div, {
    className: `${classPrefix}-tab-list`,
    ref: tabListContainerRef,
    scrollLeft: scrollLeft
  }, panes.map(pane => withNativeProps(pane.props, React.createElement("div", {
    key: pane.key,
    className: `${classPrefix}-tab-wrapper`
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
  }, React.createElement("div", {
    className: `${classPrefix}-tab-title`
  }, pane.props.title), React.createElement("div", {
    className: `${classPrefix}-tab-description`
  }, pane.props.description))))))), panes.map(pane => {
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