import React from 'react';
import { withNativeProps } from '../../utils/native-props';
import { RightOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import { isNodeWithContent } from '../../utils/is-node-with-content';
const classPrefix = `adm-list-item`;
export const ListItem = props => {
  var _a;

  const clickable = (_a = props.clickable) !== null && _a !== void 0 ? _a : !!props.onClick;
  const arrow = props.arrow === undefined ? clickable : props.arrow;
  const content = React.createElement("div", {
    className: `${classPrefix}-content`
  }, isNodeWithContent(props.prefix) && React.createElement("div", {
    className: `${classPrefix}-content-prefix`
  }, props.prefix), React.createElement("div", {
    className: `${classPrefix}-content-main`
  }, isNodeWithContent(props.title) && React.createElement("div", {
    className: `${classPrefix}-title`
  }, props.title), props.children, isNodeWithContent(props.description) && React.createElement("div", {
    className: `${classPrefix}-description`
  }, props.description)), isNodeWithContent(props.extra) && React.createElement("div", {
    className: `${classPrefix}-content-extra`
  }, props.extra), isNodeWithContent(arrow) && React.createElement("div", {
    className: `${classPrefix}-content-arrow`
  }, arrow === true ? React.createElement(RightOutline, null) : arrow));
  return withNativeProps(props, React.createElement(clickable ? 'a' : 'div', {
    className: classNames(`${classPrefix}`, clickable ? ['adm-plain-anchor'] : [], props.disabled && `${classPrefix}-disabled`),
    onClick: props.disabled ? undefined : props.onClick
  }, content));
};