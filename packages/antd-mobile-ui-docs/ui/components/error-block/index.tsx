import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC, ReactNode } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-error-block`;

export type ErrorBlockProps = {
  image?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
};
const defaultProps: ErrorBlockProps = {};
const ErrorBlock = function (p: ErrorBlockProps) {
  const props = { ...defaultProps, ...p };
  return (
    <View className={classnames(`${classPrefix}`)}>
      {!!props.image && (
        <View className={`${classPrefix}-icon`}>{props.image}</View>
      )}
      {!!props.title && (
        <View className={`${classPrefix}-titles`}>
          <Text className={`${classPrefix}-title`}>{props.title}</Text>
        </View>
      )}
      {!!props.description && (
        <View className={`${classPrefix}-infos`}>
          <Text className={`${classPrefix}-info`}>{props.description}</Text>
        </View>
      )}
    </View>
  );
};
export default ErrorBlock;
