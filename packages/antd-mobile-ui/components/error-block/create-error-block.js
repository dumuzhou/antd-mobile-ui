import React from 'react';
import classNames from 'classnames';
import { mergeProps } from '../../utils/with-default-props';
import { withNativeProps } from '../../utils/native-props';
import { useConfig } from '../config-provider';
const classPrefix = `adm-error-block`;
const defaultProps = {
  status: 'default'
};
export function createErrorBlock(imageRecord) {
  const ErrorBlock = p => {
    var _a;

    const props = mergeProps(defaultProps, p);
    const {
      locale
    } = useConfig();
    const contentPack = locale.ErrorBlock[props.status];
    const des = 'description' in props ? props.description : contentPack.description;
    const title = 'title' in props ? props.title : contentPack.title;
    const image = (_a = props.image) !== null && _a !== void 0 ? _a : imageRecord[props.status];
    const imageNode = typeof image === 'string' ? React.createElement("img", {
      src: image,
      alt: 'error block image'
    }) : image;
    return withNativeProps(props, React.createElement("div", {
      className: classNames(classPrefix, {
        [`${classPrefix}-full-page`]: props.fullPage
      })
    }, React.createElement("div", {
      className: `${classPrefix}-image`
    }, imageNode), React.createElement("div", {
      className: `${classPrefix}-description`
    }, title && React.createElement("div", {
      className: `${classPrefix}-description-title`
    }, title), des && React.createElement("div", {
      className: `${classPrefix}-description-subtitle`
    }, des)), props.children && React.createElement("div", {
      className: `${classPrefix}-content`
    }, props.children)));
  };

  return ErrorBlock;
}