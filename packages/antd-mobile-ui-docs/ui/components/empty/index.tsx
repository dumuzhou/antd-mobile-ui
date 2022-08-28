import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC, ReactNode } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-empty`;

export type ResultProps = {
  image?: ReactNode;
  description?: ReactNode;
};
const defaultProps: ResultProps = {};
const Result = function (p: ResultProps) {
  const props = { ...defaultProps, ...p };
  return (
    <View className={classnames(`${classPrefix}`)}>
      {!!props.image && (
        <View className={`${classPrefix}-icon`}>{props.image}</View>
      )}
      {!!props.description && (
        <View className={`${classPrefix}-infos`}>
          <Text className={`${classPrefix}-info`}>{props.description}</Text>
        </View>
      )}
    </View>
  );
};
export default Result;
