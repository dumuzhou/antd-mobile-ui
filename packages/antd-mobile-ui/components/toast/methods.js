import React from 'react';
import { InternalToast } from './toast';
import { mergeProps } from '../../utils/with-default-props';
import { renderImperatively } from '../../utils/render-imperatively';
let currentHandler = null;
let currentTimeout = null;
const defaultProps = {
  duration: 2000,
  position: 'center',
  maskClickable: true
};

const ToastInner = props => React.createElement(InternalToast, Object.assign({}, props));

export function show(p) {
  const props = mergeProps(defaultProps, typeof p === 'string' ? {
    content: p
  } : p);
  const element = React.createElement(ToastInner, Object.assign({}, props, {
    onClose: () => {
      currentHandler = null;
    }
  }));

  if (currentHandler) {
    currentHandler.replace(element);
  } else {
    currentHandler = renderImperatively(element);
  }

  if (currentTimeout) {
    window.clearTimeout(currentTimeout);
  }

  if (props.duration !== 0) {
    currentTimeout = window.setTimeout(() => {
      clear();
    }, props.duration);
  }

  return currentHandler;
}
export function clear() {
  currentHandler === null || currentHandler === void 0 ? void 0 : currentHandler.close();
  currentHandler = null;
}
export function config(val) {
  if (val.duration !== undefined) {
    defaultProps.duration = val.duration;
  }

  if (val.position !== undefined) {
    defaultProps.position = val.position;
  }

  if (val.maskClickable !== undefined) {
    defaultProps.maskClickable = val.maskClickable;
  }
}