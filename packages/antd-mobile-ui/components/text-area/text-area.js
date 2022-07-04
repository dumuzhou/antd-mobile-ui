import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useIsomorphicLayoutEffect } from 'ahooks';
import { withNativeProps } from '../../utils/native-props';
import { usePropsValue } from '../../utils/use-props-value';
import { mergeProps } from '../../utils/with-default-props';
import { devError } from '../../utils/dev-log';
const classPrefix = 'adm-text-area';
const defaultProps = {
  rows: 2,
  showCount: false,
  autoSize: false,
  defaultValue: ''
};
export const TextArea = forwardRef((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const {
    autoSize,
    showCount,
    maxLength
  } = props;
  const [value, setValue] = usePropsValue(Object.assign(Object.assign({}, props), {
    value: props.value === null ? '' : props.value
  }));

  if (props.value === null) {
    devError('TextArea', '`value` prop on `TextArea` should not be `null`. Consider using an empty string to clear the component.');
  }

  const nativeTextAreaRef = useRef(null);
  useImperativeHandle(ref, () => ({
    clear: () => {
      setValue('');
    },
    focus: () => {
      var _a;

      (_a = nativeTextAreaRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    },
    blur: () => {
      var _a;

      (_a = nativeTextAreaRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    },

    get nativeElement() {
      return nativeTextAreaRef.current;
    }

  }));
  useIsomorphicLayoutEffect(() => {
    if (!autoSize) return;
    const textArea = nativeTextAreaRef.current;
    if (!textArea) return;
    let height = textArea.scrollHeight;

    if (typeof autoSize === 'object') {
      const computedStyle = window.getComputedStyle(textArea);
      const lineHeight = parseFloat(computedStyle.lineHeight);

      if (autoSize.minRows) {
        height = Math.max(height, autoSize.minRows * lineHeight);
      }

      if (autoSize.maxRows) {
        height = Math.min(height, autoSize.maxRows * lineHeight);
      }
    }

    textArea.style.height = `${height}px`;
  }, [value, autoSize]);
  const compositingRef = useRef(false);
  let count;
  const valueLength = [...value].length;

  if (typeof showCount === 'function') {
    count = showCount(valueLength, maxLength);
  } else if (showCount) {
    count = React.createElement("div", {
      className: `${classPrefix}-count`
    }, maxLength === undefined ? valueLength : valueLength + '/' + maxLength);
  }

  return withNativeProps(props, React.createElement("div", {
    className: classPrefix
  }, React.createElement("textarea", {
    ref: nativeTextAreaRef,
    className: `${classPrefix}-element`,
    rows: props.rows,
    value: value,
    placeholder: props.placeholder,
    onChange: e => {
      let v = e.target.value;

      if (maxLength && !compositingRef.current) {
        v = [...v].slice(0, maxLength).join('');
      }

      setValue(v);
    },
    id: props.id,
    onCompositionStart: e => {
      var _a;

      compositingRef.current = true;
      (_a = props.onCompositionStart) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    onCompositionEnd: e => {
      var _a;

      compositingRef.current = false;

      if (maxLength) {
        const v = e.target.value;
        setValue([...v].slice(0, maxLength).join(''));
      }

      (_a = props.onCompositionEnd) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    autoComplete: props.autoComplete,
    autoFocus: props.autoFocus,
    disabled: props.disabled,
    readOnly: props.readOnly,
    name: props.name,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onClick: props.onClick
  }), count));
});
TextArea.defaultProps = defaultProps;