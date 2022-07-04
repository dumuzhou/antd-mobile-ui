import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { MinusOutline, AddOutline } from 'antd-mobile-icons';
import { withNativeProps } from '../../utils/native-props';
import { usePropsValue } from '../../utils/use-props-value';
import { mergeProps } from '../../utils/with-default-props';
import { bound } from '../../utils/bound';
import Input from '../input';
import Button from '../button';
import Big from 'big.js';
import { useConfig } from '../config-provider';
const classPrefix = `adm-stepper`;
const defaultProps = {
  defaultValue: 0,
  step: 1,
  disabled: false,
  allowEmpty: false
};
export const Stepper = p => {
  const props = mergeProps(defaultProps, p);
  const {
    disabled,
    step,
    max,
    min,
    inputReadOnly
  } = props;
  const {
    locale
  } = useConfig();
  const [value, setValue] = usePropsValue(props);
  const [inputValue, setInputValue] = useState(() => convertValueToText(value, props.digits));

  function setValueWithCheck(v) {
    if (isNaN(v)) return;
    let target = bound(v, props.min, props.max);

    if (props.digits !== undefined) {
      target = parseFloat(target.toFixed(props.digits));
    }

    setValue(target);
  }

  const [hasFocus, setHasFocus] = useState(false);
  useEffect(() => {
    if (!hasFocus) {
      setInputValue(convertValueToText(value, props.digits));
    }
  }, [hasFocus]);
  useEffect(() => {
    if (!hasFocus) {
      setInputValue(convertValueToText(value, props.digits));
    }
  }, [value, props.digits]);

  const handleInputChange = v => {
    setInputValue(v);
    const value = convertTextToValue(v);

    if (value === null) {
      if (props.allowEmpty) {
        setValue(null);
      } else {
        setValue(props.defaultValue);
      }
    } else {
      setValueWithCheck(value);
    }
  };

  const handleMinus = () => {
    setValueWithCheck(Big(value !== null && value !== void 0 ? value : 0).minus(step).toNumber());
  };

  const handlePlus = () => {
    setValueWithCheck(Big(value !== null && value !== void 0 ? value : 0).add(step).toNumber());
  };

  const minusDisabled = () => {
    if (disabled) return true;
    if (value === null) return false;

    if (min !== undefined) {
      return value <= min;
    }

    return false;
  };

  const plusDisabled = () => {
    if (disabled) return true;
    if (value === null) return false;

    if (max !== undefined) {
      return value >= max;
    }

    return false;
  };

  return withNativeProps(props, React.createElement("div", {
    className: classNames(classPrefix, {
      [`${classPrefix}-active`]: hasFocus
    })
  }, React.createElement(Button, {
    className: `${classPrefix}-minus`,
    onClick: handleMinus,
    disabled: minusDisabled(),
    fill: 'none',
    shape: 'rectangular',
    color: 'primary',
    "aria-label": locale.Stepper.decrease
  }, React.createElement(MinusOutline, null)), React.createElement("div", {
    className: `${classPrefix}-middle`
  }, React.createElement(Input, {
    className: `${classPrefix}-input`,
    onFocus: e => {
      var _a;

      setHasFocus(true);
      (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    value: inputValue,
    onChange: val => {
      disabled || handleInputChange(val);
    },
    disabled: disabled,
    onBlur: e => {
      var _a;

      setHasFocus(false);
      (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    readOnly: inputReadOnly,
    role: 'spinbutton',
    "aria-valuenow": Number(inputValue),
    "aria-valuemax": max,
    "aria-valuemin": min
  })), React.createElement(Button, {
    className: `${classPrefix}-plus`,
    onClick: handlePlus,
    disabled: plusDisabled(),
    fill: 'none',
    shape: 'rectangular',
    color: 'primary',
    "aria-label": locale.Stepper.increase
  }, React.createElement(AddOutline, null))));
};

function convertValueToText(value, digits) {
  if (value === null) return '';

  if (digits !== undefined) {
    return value.toFixed(digits);
  } else {
    return value.toString();
  }
}

function convertTextToValue(text) {
  if (text === '') return null;
  return parseFloat(text);
}