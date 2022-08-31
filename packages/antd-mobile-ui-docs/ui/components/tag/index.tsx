import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC, ReactNode } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";

import { NativeProps, withNativeProps } from "../utils/native-props";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-tag`;

export type TagProps = {
  color?: string;
  fill?: "solid" | "outline";
  children?: any;
  round?: boolean;
  onClick?: Function;
} & NativeProps<"--border-color">;
const defaultProps: TagProps = {
  color: "default",
  round: false,
  fill: "solid",
};
const Tag = function (p: TagProps) {
  const props = { ...defaultProps, ...p };
  return withNativeProps(
    props,

    <View
      className={classnames(
        `${classPrefix}`,
        props.color ? `${classPrefix}-color-${props.color}` : null,
        props.round ? `${classPrefix}-round` : null,
        props.fill ? `${classPrefix}-fill-${props.fill}` : null
      )}
      onClick={(e) => {
        props.onClick?.(e);
      }}
    >
      <Text
        className={classnames(
          `${classPrefix}-text`,
          props.color ? `${classPrefix}-text-${props.color}` : null,
          props.fill ? `${classPrefix}-text-${props.fill}` : null,
          props.fill === "outline" && props.color
            ? `${classPrefix}-text-fill-${props.color}`
            : null
        )}
      >
        {props.children}
      </Text>
    </View>
  );
};
export default Tag;
