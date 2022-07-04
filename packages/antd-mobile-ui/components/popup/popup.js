import classNames from 'classnames';
import React, { useState, useRef } from 'react';
import { useIsomorphicLayoutEffect, useUnmountedRef } from 'ahooks';
import { withNativeProps } from '../../utils/native-props';
import { mergeProps } from '../../utils/with-default-props';
import Mask from '../mask';
import { useLockScroll } from '../../utils/use-lock-scroll';
import { renderToContainer } from '../../utils/render-to-container';
import { useSpring, animated } from '@react-spring/web';
import { withStopPropagation } from '../../utils/with-stop-propagation';
import { ShouldRender } from '../../utils/should-render';
import { CloseOutline } from 'antd-mobile-icons';
import { defaultPopupBaseProps } from './popup-base-props';
import { useInnerVisible } from '../../utils/use-inner-visible';
const classPrefix = `adm-popup`;
const defaultProps = Object.assign(Object.assign({}, defaultPopupBaseProps), {
  position: 'bottom'
});
export const Popup = p => {
  const props = mergeProps(defaultProps, p);
  const bodyCls = classNames(`${classPrefix}-body`, props.bodyClassName, `${classPrefix}-body-position-${props.position}`);
  const [active, setActive] = useState(props.visible);
  useIsomorphicLayoutEffect(() => {
    if (props.visible) {
      setActive(true);
    }
  }, [props.visible]);
  const ref = useRef(null);
  useLockScroll(ref, props.disableBodyScroll && active);
  const unmountedRef = useUnmountedRef();
  const {
    percent
  } = useSpring({
    percent: props.visible ? 0 : 100,
    config: {
      precision: 0.1,
      mass: 0.4,
      tension: 300,
      friction: 30
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
  const maskVisible = useInnerVisible(active && props.visible);
  const node = withStopPropagation(props.stopPropagation, withNativeProps(props, React.createElement("div", {
    className: classPrefix,
    onClick: props.onClick,
    style: {
      display: active ? undefined : 'none'
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
    className: props.maskClassName,
    style: props.maskStyle,
    disableBodyScroll: false,
    stopPropagation: props.stopPropagation
  }), React.createElement(animated.div, {
    className: bodyCls,
    style: Object.assign(Object.assign({}, props.bodyStyle), {
      transform: percent.to(v => {
        if (props.position === 'bottom') {
          return `translate(0, ${v}%)`;
        }

        if (props.position === 'top') {
          return `translate(0, -${v}%)`;
        }

        if (props.position === 'left') {
          return `translate(-${v}%, 0)`;
        }

        if (props.position === 'right') {
          return `translate(${v}%, 0)`;
        }

        return 'none';
      })
    }),
    ref: ref
  }, props.showCloseButton && React.createElement("a", {
    className: classNames(`${classPrefix}-close-icon`, 'adm-plain-anchor'),
    onClick: () => {
      var _a;

      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  }, React.createElement(CloseOutline, null)), props.children))));
  return React.createElement(ShouldRender, {
    active: active,
    forceRender: props.forceRender,
    destroyOnClose: props.destroyOnClose
  }, renderToContainer(props.getContainer, node));
};