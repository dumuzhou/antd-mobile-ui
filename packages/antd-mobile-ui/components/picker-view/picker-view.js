import React, { memo, useCallback, useEffect, useState } from 'react';
import { mergeProps } from '../../utils/with-default-props';
import { Wheel } from './wheel';
import { useColumnsExtend } from './columns-extend';
import { withNativeProps } from '../../utils/native-props';
import { useDebounceEffect } from 'ahooks';
import { defaultRenderLabel } from '../picker/picker-utils';
import SpinLoading from '../spin-loading';
const classPrefix = `adm-picker-view`;
const defaultProps = {
  defaultValue: [],
  renderLabel: defaultRenderLabel,
  mouseWheel: false,
  loadingContent: React.createElement("div", {
    className: `${classPrefix}-loading-content`
  }, React.createElement(SpinLoading, null))
};
export const PickerView = memo(p => {
  const props = mergeProps(defaultProps, p);
  const [innerValue, setInnerValue] = useState(props.value === undefined ? props.defaultValue : props.value); // Sync `value` to `innerValue`

  useEffect(() => {
    if (props.value === undefined) return; // Uncontrolled mode

    if (props.value === innerValue) return;
    setInnerValue(props.value);
  }, [props.value]);
  useEffect(() => {
    if (props.value === innerValue) return;
    const timeout = window.setTimeout(() => {
      if (props.value !== undefined && props.value !== innerValue) {
        setInnerValue(props.value);
      }
    }, 1000);
    return () => {
      window.clearTimeout(timeout);
    };
  }, [props.value, innerValue]);
  const extend = useColumnsExtend(props.columns, innerValue);
  const columns = extend.columns;
  useDebounceEffect(() => {
    var _a;

    if (props.value === innerValue) return;
    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, innerValue, extend);
  }, [innerValue], {
    wait: 0,
    leading: false,
    trailing: true
  });
  const handleSelect = useCallback((val, index) => {
    setInnerValue(prev => {
      const next = [...prev];
      next[index] = val;
      return next;
    });
  }, []);
  return withNativeProps(props, React.createElement("div", {
    className: `${classPrefix}`
  }, props.loading ? props.loadingContent : React.createElement(React.Fragment, null, columns.map((column, index) => React.createElement(Wheel, {
    key: index,
    index: index,
    column: column,
    value: innerValue[index],
    onSelect: handleSelect,
    renderLabel: props.renderLabel,
    mouseWheel: props.mouseWheel
  })), React.createElement("div", {
    className: `${classPrefix}-mask`
  }, React.createElement("div", {
    className: `${classPrefix}-mask-top`
  }), React.createElement("div", {
    className: `${classPrefix}-mask-middle`
  }), React.createElement("div", {
    className: `${classPrefix}-mask-bottom`
  })))));
});
PickerView.displayName = 'PickerView';