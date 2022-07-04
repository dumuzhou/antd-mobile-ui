import { __awaiter } from "tslib";
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import classNames from 'classnames';
import DotLoading from '../dot-loading';
import { mergeProps } from '../../utils/with-default-props';
import { withNativeProps } from '../../utils/native-props';
import { isPromise } from '../../utils/validate';
const classPrefix = `adm-button`;
const defaultProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  loadingIcon: React.createElement(DotLoading, {
    color: 'currentColor'
  }),
  type: 'button',
  shape: 'default',
  size: 'middle'
};
export const Button = forwardRef((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const [innerLoading, setInnerLoading] = useState(false);
  const nativeButtonRef = useRef(null);
  const loading = props.loading === 'auto' ? innerLoading : props.loading;
  const disabled = props.disabled || loading;
  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return nativeButtonRef.current;
    }

  }));

  const handleClick = e => __awaiter(void 0, void 0, void 0, function* () {
    if (!props.onClick) return;
    const promise = props.onClick(e);

    if (isPromise(promise)) {
      try {
        setInnerLoading(true);
        yield promise;
        setInnerLoading(false);
      } catch (e) {
        setInnerLoading(false);
        throw e;
      }
    }
  });

  return withNativeProps(props, React.createElement("button", {
    ref: nativeButtonRef,
    type: props.type,
    onClick: handleClick,
    className: classNames(classPrefix, props.color ? `${classPrefix}-${props.color}` : null, {
      [`${classPrefix}-block`]: props.block,
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-fill-outline`]: props.fill === 'outline',
      [`${classPrefix}-fill-none`]: props.fill === 'none',
      [`${classPrefix}-mini`]: props.size === 'mini',
      [`${classPrefix}-small`]: props.size === 'small',
      [`${classPrefix}-large`]: props.size === 'large',
      [`${classPrefix}-loading`]: loading
    }, `${classPrefix}-shape-${props.shape}`),
    disabled: disabled,
    onMouseDown: props.onMouseDown,
    onMouseUp: props.onMouseUp,
    onTouchStart: props.onTouchStart,
    onTouchEnd: props.onTouchEnd
  }, loading ? React.createElement("div", {
    className: `${classPrefix}-loading-wrapper`
  }, props.loadingIcon, props.loadingText) : props.children));
});