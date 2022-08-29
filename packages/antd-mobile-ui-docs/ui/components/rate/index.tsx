import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC, ReactNode, useState, useEffect } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";

import { NativeProps, withNativeProps } from "../utils/native-props";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-rate`;

export type RateProps = {
  character?: ReactNode;
  characterSelect?: ReactNode;
  allowHalf?: boolean;
  value?: number;
  readOnly?: boolean;
  allowClear?: boolean;
  onChange?: Function;
} & NativeProps<"--border-color">;
const defaultProps: RateProps = {
  allowHalf: false,
  value: 0,
  readOnly: false,
  allowClear: true,
};
const Rate = function (p: RateProps) {
  const props = { ...defaultProps, ...p };
  const [value, setValue] = useState<number>(props.value ? props.value : 0);
  const onClickLeft = (index: number) => {
    if (props.readOnly) return;
    let target = index;
    if (props.allowHalf) {
      target = index - 0.5;
    } else {
    }
    if (value !== target) {
      setValue(target);
    } else {
      if (props.allowClear) {
        setValue(0);
      }
    }
  };
  const onClickRight = (index: number) => {
    if (props.readOnly) return;
    let target = index;
    if (props.allowHalf) {
      //target = index - 0.5;
    } else {
    }
    if (value !== target) {
      setValue(target);
    } else {
      if (props.allowClear) {
        setValue(0);
      }
    }
  };

  const renderIcon = (index: number) => {
    return (
      <View key={index} className={classnames(`${classPrefix}-item`)}>
        <View
          className={classnames(`${classPrefix}-left`)}
          onClick={() => {
            onClickLeft(index);
          }}
        >
          <View className={classnames(`${classPrefix}-left-wrap`)}>
            {Number(value.toFixed(0)) >= index && props.characterSelect}
            {Number(value.toFixed(0)) < index && props.character}
          </View>
        </View>
        <View
          className={classnames(`${classPrefix}-right`)}
          onClick={() => {
            onClickRight(index);
          }}
        >
          <View className={classnames(`${classPrefix}-right-wrap`)}>
            {value >= index && props.characterSelect}
            {value < index && props.character}
          </View>
        </View>
      </View>
    );
  };
  useEffect(() => {
    props.onChange?.(value);
  }, [value]);
  return withNativeProps(
    props,

    <View className={classnames(`${classPrefix}`)}>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return renderIcon(item);
      })}
    </View>
  );
};
export default Rate;
