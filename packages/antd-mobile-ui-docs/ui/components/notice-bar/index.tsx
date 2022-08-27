import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC, ReactNode, useState } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-notice-bar`;

export type ButtonProps = {
  icon?: ReactNode;
  extra?: ReactNode;
  content?: string;
  color?: "default" | "alert" | "error" | "info";
  onClose?: Function;
};
const defaultProps: ButtonProps = {
  color: "default",
};
const NoticeBar = function (p: ButtonProps) {
  const props = { ...defaultProps, ...p };
  const [show, setShow] = useState(true);
  return (
    <View
      className={classnames(
        `${classPrefix}`,

        props.color ? `${classPrefix}-${props.color}` : null,
        !show ? `${classPrefix}-hide` : null
      )}
    >
      <View className={`${classPrefix}-wrap`}>
        {!!props.icon && (
          <View className={`${classPrefix}-ico`}>{props.icon}</View>
        )}
        <Text
          className={classnames(
            `${classPrefix}-text`,
            props.color ? `${classPrefix}-text-${props.color}` : null
          )}
        >
          {props.content}
        </Text>
      </View>
      {!!props.extra && (
        <View
          className={`${classPrefix}-ico1`}
          onClick={() => {
            setShow(!show);
            props.onClose?.();
          }}
        >
          {props.extra}
        </View>
      )}
    </View>
  );
};
export default NoticeBar;
