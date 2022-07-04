import { __awaiter } from "tslib";
import React from 'react';
import { mergeProps } from '../../utils/with-default-props';
import classNames from 'classnames';
import { DialogActionButton } from './dialog-action-button';
import Image from '../image';
import AutoCenter from '../auto-center';
import CenterPopup from '../center-popup';
const defaultProps = {
  actions: [],
  closeOnAction: false,
  closeOnMaskClick: false,
  getContainer: null
};
export const Dialog = p => {
  const props = mergeProps(defaultProps, p);
  const element = React.createElement(React.Fragment, null, !!props.image && React.createElement("div", {
    className: cls('image-container')
  }, React.createElement(Image, {
    src: props.image,
    alt: 'dialog header image',
    width: '100%'
  })), !!props.header && React.createElement("div", {
    className: cls('header')
  }, React.createElement(AutoCenter, null, props.header)), !!props.title && React.createElement("div", {
    className: cls('title')
  }, props.title), React.createElement("div", {
    className: classNames(cls('content'), !props.content && cls('content-empty'))
  }, typeof props.content === 'string' ? React.createElement(AutoCenter, null, props.content) : props.content), React.createElement("div", {
    className: cls('footer')
  }, props.actions.map((row, index) => {
    const actions = Array.isArray(row) ? row : [row];
    return React.createElement("div", {
      className: cls('action-row'),
      key: index
    }, actions.map((action, index) => React.createElement(DialogActionButton, {
      key: action.key,
      action: action,
      onAction: () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;

        yield Promise.all([(_a = action.onClick) === null || _a === void 0 ? void 0 : _a.call(action), (_b = props.onAction) === null || _b === void 0 ? void 0 : _b.call(props, action, index)]);

        if (props.closeOnAction) {
          (_c = props.onClose) === null || _c === void 0 ? void 0 : _c.call(props);
        }
      })
    })));
  })));
  return React.createElement(CenterPopup, {
    className: classNames(cls(), props.className),
    style: props.style,
    afterClose: props.afterClose,
    afterShow: props.afterShow,
    onMaskClick: props.closeOnMaskClick ? () => {
      var _a;

      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    } : undefined,
    visible: props.visible,
    getContainer: props.getContainer,
    bodyStyle: props.bodyStyle,
    bodyClassName: classNames(cls('body'), props.image && cls('with-image'), props.bodyClassName),
    maskStyle: props.maskStyle,
    maskClassName: props.maskClassName,
    stopPropagation: props.stopPropagation,
    disableBodyScroll: props.disableBodyScroll,
    destroyOnClose: props.destroyOnClose,
    forceRender: props.forceRender,
    role: 'dialog',
    "aria-label": props['aria-label']
  }, element);
};

function cls(name = '') {
  return 'adm-dialog' + (name && '-') + name;
}