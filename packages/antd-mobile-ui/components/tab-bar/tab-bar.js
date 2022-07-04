import React from 'react';
import classNames from 'classnames';
import { withNativeProps } from '../../utils/native-props';
import { mergeProps } from '../../utils/with-default-props';
import Badge from '../badge';
import SafeArea from '../safe-area';
import { usePropsValue } from '../../utils/use-props-value';
import { traverseReactNode } from '../../utils/traverse-react-node';
/* istanbul ignore next */

export const TabBarItem = () => {
  return null;
};
const classPrefix = `adm-tab-bar`;
const defaultProps = {
  safeArea: false
};
export const TabBar = p => {
  var _a;

  const props = mergeProps(defaultProps, p);
  let firstActiveKey = null;
  const items = [];
  traverseReactNode(props.children, (child, index) => {
    if (!React.isValidElement(child)) return;
    const key = child.key;
    if (typeof key !== 'string') return;

    if (index === 0) {
      firstActiveKey = key;
    }

    items.push(child);
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
  return withNativeProps(props, React.createElement("div", {
    className: classPrefix
  }, React.createElement("div", {
    className: `${classPrefix}-wrap`
  }, items.map(item => {
    const active = item.key === activeKey;

    function renderContent() {
      const iconElement = item.props.icon && React.createElement("div", {
        className: `${classPrefix}-item-icon`
      }, typeof item.props.icon === 'function' ? item.props.icon(active) : item.props.icon);
      const titleElement = item.props.title && React.createElement("div", {
        className: classNames(`${classPrefix}-item-title`, Boolean(iconElement) && `${classPrefix}-item-title-with-icon`)
      }, typeof item.props.title === 'function' ? item.props.title(active) : item.props.title);

      if (iconElement) {
        return React.createElement(React.Fragment, null, React.createElement(Badge, {
          content: item.props.badge,
          className: `${classPrefix}-icon-badge`
        }, iconElement), titleElement);
      } else if (titleElement) {
        return React.createElement(Badge, {
          content: item.props.badge,
          className: `${classPrefix}-title-badge`
        }, titleElement);
      }

      return null;
    }

    return withNativeProps(item.props, React.createElement("div", {
      key: item.key,
      onClick: () => {
        const {
          key
        } = item;
        if (key === undefined || key === null) return;
        setActiveKey(key.toString());
      },
      className: classNames(`${classPrefix}-item`, {
        [`${classPrefix}-item-active`]: active
      })
    }, renderContent()));
  })), props.safeArea && React.createElement(SafeArea, {
    position: 'bottom'
  })));
};