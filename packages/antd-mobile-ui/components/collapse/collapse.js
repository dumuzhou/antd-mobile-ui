import React, { useRef } from 'react';
import { withNativeProps } from '../../utils/native-props';
import List from '../list';
import { DownOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import { useSpring, animated } from '@react-spring/web';
import { usePropsValue } from '../../utils/use-props-value';
import { useMount } from 'ahooks';
import { useShouldRender } from '../../utils/should-render';
import { useIsomorphicUpdateLayoutEffect } from '../../utils/use-isomorphic-update-layout-effect';
import { traverseReactNode } from '../../utils/traverse-react-node';
const classPrefix = `adm-collapse`;
export const CollapsePanel = () => {
  return null;
};

const CollapsePanelContent = props => {
  const {
    visible
  } = props;
  const innerRef = useRef(null);
  const shouldRender = useShouldRender(visible, props.forceRender, props.destroyOnClose);
  const [{
    height
  }, api] = useSpring(() => ({
    from: {
      height: 0
    },
    config: {
      precision: 0.01,
      mass: 1,
      tension: 200,
      friction: 25,
      clamp: true
    }
  }));
  useMount(() => {
    if (!visible) return;
    const inner = innerRef.current;
    if (!inner) return;
    api.start({
      height: inner.offsetHeight,
      immediate: true
    });
  });
  useIsomorphicUpdateLayoutEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    if (visible) {
      api.start({
        height: inner.offsetHeight
      });
    } else {
      api.start({
        height: inner.offsetHeight,
        immediate: true
      });
      api.start({
        height: 0
      });
    }
  }, [visible]);
  return React.createElement(animated.div, {
    className: `${classPrefix}-panel-content`,
    style: {
      height: height.to(v => {
        if (height.idle && visible) {
          return 'auto';
        } else {
          return v;
        }
      })
    }
  }, React.createElement("div", {
    className: `${classPrefix}-panel-content-inner`,
    ref: innerRef
  }, React.createElement(List.Item, null, shouldRender && props.children)));
};

export const Collapse = props => {
  var _a;

  const panels = [];
  traverseReactNode(props.children, child => {
    if (!React.isValidElement(child)) return;
    const key = child.key;
    if (typeof key !== 'string') return;
    panels.push(child);
  });
  const [activeKey, setActiveKey] = usePropsValue(props.accordion ? {
    value: props.activeKey === undefined ? undefined : props.activeKey === null ? [] : [props.activeKey],
    defaultValue: props.defaultActiveKey === undefined || props.defaultActiveKey === null ? [] : [props.defaultActiveKey],
    onChange: v => {
      var _a, _b;

      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, (_b = v[0]) !== null && _b !== void 0 ? _b : null);
    }
  } : {
    value: props.activeKey,
    defaultValue: (_a = props.defaultActiveKey) !== null && _a !== void 0 ? _a : [],
    onChange: props.onChange
  });
  const activeKeyList = activeKey === null ? [] : Array.isArray(activeKey) ? activeKey : [activeKey];
  return withNativeProps(props, React.createElement("div", {
    className: classPrefix
  }, React.createElement(List, null, panels.map(panel => {
    const key = panel.key;
    const active = activeKeyList.includes(key);

    function handleClick(event) {
      var _a, _b;

      if (props.accordion) {
        if (active) {
          setActiveKey([]);
        } else {
          setActiveKey([key]);
        }
      } else {
        if (active) {
          setActiveKey(activeKeyList.filter(v => v !== key));
        } else {
          setActiveKey([...activeKeyList, key]);
        }
      }

      (_b = (_a = panel.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, event);
    }

    const renderArrow = () => {
      let arrow = React.createElement(DownOutline, null);

      if (props.arrow !== undefined) {
        arrow = props.arrow;
      }

      if (panel.props.arrow !== undefined) {
        arrow = panel.props.arrow;
      }

      return typeof arrow === 'function' ? arrow(active) : React.createElement("div", {
        className: classNames(`${classPrefix}-arrow`, {
          [`${classPrefix}-arrow-active`]: active
        })
      }, arrow);
    };

    return React.createElement(React.Fragment, {
      key: key
    }, withNativeProps(panel.props, React.createElement(List.Item, {
      className: `${classPrefix}-panel-header`,
      onClick: handleClick,
      disabled: panel.props.disabled,
      arrow: renderArrow()
    }, panel.props.title)), React.createElement(CollapsePanelContent, {
      visible: active,
      forceRender: !!panel.props.forceRender,
      destroyOnClose: !!panel.props.destroyOnClose
    }, panel.props.children));
  }))));
};