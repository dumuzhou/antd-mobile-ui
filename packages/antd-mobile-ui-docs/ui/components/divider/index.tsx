import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-divider`;

export type DividerProps = {
  direction?: "horizontal" | "vertical";
  children?: any;
};
const defaultProps: DividerProps = {
  direction: "horizontal",
};
const Divider = function (p: DividerProps) {
  console.log("child");
  const props = { ...defaultProps, ...p };
  console.log(props.children);
  if (props.direction === "vertical") {
    return (
      <View
        className={classnames(`${classPrefix}`, `${classPrefix}-ver`)}
      ></View>
    );
  }
  return (
    <View
      className={classnames(
        `${classPrefix}`,
        props.children ? `${classPrefix}-cld` : null
      )}
    >
      <View className={classnames(`${classPrefix}-line`)}></View>
      {!!props.children && (
        <View className={classnames(`${classPrefix}-texts`)}>
          <Text className={classnames(`${classPrefix}-text`)}>
            {props.children}
          </Text>
        </View>
      )}
      {!!props.children && (
        <View className={classnames(`${classPrefix}-line`)}></View>
      )}
    </View>
  );
};
export default Divider;
