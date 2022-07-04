import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { usePropsValue } from '../../utils/use-props-value';
import { CloseCircleFill } from 'antd-mobile-icons';
import { withNativeProps } from '../../utils/native-props';
import { mergeProps } from '../../utils/with-default-props';
import classNames from 'classnames';
import { useIsomorphicLayoutEffect } from 'ahooks';
import { bound } from '../../utils/bound';
import { isIOS } from '../../utils/validate';
const classPrefix = `adm-input`;
const defaultProps = {
  defaultValue: '',
  onlyShowClearWhenFocus: true
};
export const Input = forwardRef((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const [value, setValue] = usePropsValue(props);
  const [hasFocus, setHasFocus] = useState(false);
  const compositionStartRef = useRef(false);
  const nativeInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    clear: () => {
      setValue('');
    },
    focus: () => {
      var _a;

      (_a = nativeInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    },
    blur: () => {
      var _a;

      (_a = nativeInputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    },

    get nativeElement() {
      return nativeInputRef.current;
    }

  }));

  const handleKeydown = e => {
    var _a;

    if (props.onEnterPress && (e.code === 'Enter' || e.keyCode === 13)) {
      props.onEnterPress(e);
    }

    (_a = props.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };

  useIsomorphicLayoutEffect(() => {
    var _a;

    if (!props.enterKeyHint) return;
    (_a = nativeInputRef.current) === null || _a === void 0 ? void 0 : _a.setAttribute('enterkeyhint', props.enterKeyHint);
    return () => {
      var _a;

      (_a = nativeInputRef.current) === null || _a === void 0 ? void 0 : _a.removeAttribute('enterkeyhint');
    };
  }, [props.enterKeyHint]);

  function checkValue() {
    let nextValue = value;

    if (props.type === 'number') {
      nextValue = nextValue && bound(parseFloat(nextValue), props.min, props.max).toString();
    }

    if (nextValue !== value) {
      setValue(nextValue);
    }
  }

  const shouldShowClear = (() => {
    if (!props.clearable || !value || props.readOnly) return false;

    if (props.onlyShowClearWhenFocus) {
      return hasFocus;
    } else {
      return true;
    }
  })();

  return withNativeProps(props, React.createElement("div", {
    className: classNames(`${classPrefix}`, props.disabled && `${classPrefix}-disabled`)
  }, React.createElement("input", {
    ref: nativeInputRef,
    className: `${classPrefix}-element`,
    value: value,
    onChange: e => {
      setValue(e.target.value);
    },
    onFocus: e => {
      var _a;

      setHasFocus(true);
      (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    onBlur: e => {
      var _a;

      setHasFocus(false);
      checkValue();
      (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    id: props.id,
    placeholder: props.placeholder,
    disabled: props.disabled,
    readOnly: props.readOnly,
    maxLength: props.maxLength,
    minLength: props.minLength,
    max: props.max,
    min: props.min,
    autoComplete: props.autoComplete,
    autoFocus: props.autoFocus,
    pattern: props.pattern,
    inputMode: props.inputMode,
    type: props.type,
    name: props.name,
    autoCapitalize: props.autoCapitalize,
    autoCorrect: props.autoCorrect,
    onKeyDown: handleKeydown,
    onKeyUp: props.onKeyUp,
    onCompositionStart: e => {
      var _a;

      compositionStartRef.current = true;
      (_a = props.onCompositionStart) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    onCompositionEnd: e => {
      var _a;

      compositionStartRef.current = false;
      (_a = props.onCompositionEnd) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    onClick: props.onClick,
    role: props.role,
    "aria-valuenow": props['aria-valuenow'],
    "aria-valuemax": props['aria-valuemax'],
    "aria-valuemin": props['aria-valuemin']
  }), shouldShowClear && React.createElement("div", {
    className: `${classPrefix}-clear`,
    onMouseDown: e => {
      e.preventDefault();
    },
    onClick: () => {
      var _a, _b;

      setValue('');
      (_a = props.onClear) === null || _a === void 0 ? void 0 : _a.call(props); // https://github.com/ant-design/ant-design-mobile/issues/5212

      if (isIOS() && compositionStartRef.current) {
        compositionStartRef.current = false;
        (_b = nativeInputRef.current) === null || _b === void 0 ? void 0 : _b.blur();
      }
    }
  }, React.createElement(CloseCircleFill, null))));
});