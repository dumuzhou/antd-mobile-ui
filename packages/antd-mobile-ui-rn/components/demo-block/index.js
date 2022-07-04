import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";
//import { ButtonProps } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

export type DemoBlockProps = {
  title?: string;
  children?: React.ReactNode;
};
const defaultProps: DemoBlockProps = {
  title: "示例",
};
const TmButton = function (p: DemoBlockProps) {
  const props = { ...defaultProps, ...p };
  return (
    <View className={"m-demo-block"}>
      <View className={"m-demo-block-titles"}>
        <Text className="m-demo-block-title">{props.title}</Text>
      </View>
      <View className={"m-demo-block-item"}>{props.children}</View>
    </View>
  );
};
export default TmButton;
