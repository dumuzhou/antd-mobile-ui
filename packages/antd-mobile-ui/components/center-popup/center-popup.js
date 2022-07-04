import React, { useRef, useState } from 'react';
import { renderToContainer } from '../../utils/render-to-container';
import Mask from '../mask';
import { withStopPropagation } from '../../utils/with-stop-propagation';
import { mergeProps } from '../../utils/with-default-props';
import { useIsomorphicLayoutEffect, useUnmountedRef } from 'ahooks';
import { animated, useSpring } from '@react-spring/web';
import { useInnerVisible } from '../../utils/use-inner-visible';
import classNames from 'classnames';
import { withNativeProps } from '../../utils/native-props';
import { ShouldRender } from '../../utils/should-render';
import { useLockScroll } from '../../utils/use-lock-scroll';
import { CloseOutline } from 'antd-mobile-icons';
import { defaultPopupBaseProps } from '../popup/popup-base-props';
const defaultProps = Object.assign(Object.assign({}, defaultPopupBaseProps), {
  getContainer: null
});
export const CenterPopup = p => {
  const props = mergeProps(defaultProps, p);
  const unmountedRef = useUnmountedRef();
  const style = useSpring({
    scale: props.visible ? 1 : 0.8,
    opacity: props.visible ? 1 : 0,
    config: {
      mass: 1.2,
      tension: 200,
      friction: 25,
      clamp: true
    },
    onRest: () => {
      var _a, _b;

      if (unmountedRef.current) return;
      setActive(props.visible);

      if (props.visible) {
        (_a = props.afterShow) === null || _a === void 0 ? void 0 : _a.call(props);
      } else {
        (_b = props.afterClose) === null || _b === void 0 ? void 0 : _b.call(props);
      }
    }
  });
  const [active, setActive] = useState(props.visible);
  useIsomorphicLayoutEffect(() => {
    if (props.visible) {
      setActive(true);
    }
  }, [props.visible]);
  const ref = useRef(null);
  useLockScroll(ref, props.disableBodyScroll && active);
  const maskVisible = useInnerVisible(active && props.visible);
  const body = React.createElement("div", {
    className: classNames('adm-center-popup-body', props.bodyClassName),
    style: props.bodyStyle
  }, props.children);
  const node = withStopPropagation(props.stopPropagation, withNativeProps(props, React.createElement("div", {
    className: 'adm-center-popup',
    style: {
      display: active ? undefined : 'none',
      pointerEvents: active ? undefined : 'none'
    }
  }, props.mask && React.createElement(Mask, {
    visible: maskVisible,
    forceRender: props.forceRender,
    destroyOnClose: props.destroyOnClose,
    onMaskClick: e => {
      var _a, _b;

      (_a = props.onMaskClick) === null || _a === void 0 ? void 0 : _a.call(props, e);

      if (props.closeOnMaskClick) {
        (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);
      }
    },
    style: props.maskStyle,
    className: classNames('adm-center-popup-mask', props.maskClassName),
    disableBodyScroll: false,
    stopPropagation: props.stopPropagation
  }), React.createElement("div", {
    className: 'adm-center-popup-wrap',
    role: props.role,
    "aria-label": props['aria-label']
  }, React.createElement(animated.div, {
    style: style,
    ref: ref
  }, props.showCloseButton && React.createElement("a", {
    className: classNames('adm-center-popup-close', 'adm-plain-anchor'),
    onClick: () => {
      var _a;

      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  }, React.createElement(CloseOutline, null)), body)))));
  return React.createElement(ShouldRender, {
    active: active,
    forceRender: props.forceRender,
    destroyOnClose: props.destroyOnClose
  }, renderToContainer(props.getContainer, node));
};