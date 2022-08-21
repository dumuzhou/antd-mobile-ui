import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-divider`;

export type ButtonProps = {
  color?: "default" | "primary" | "success" | "warning" | "danger";
  disabled?: boolean;
  fill?: "solid" | "outline" | "none";
  shape?: "default" | "rounded" | "rectangular";
  size?: "mini" | "small" | "middle" | "large";
  onClick?: Function;
  children?: any;

  scope?: "userInfo" | "phoneNumber";
  onGetUserInfo?: Function;
  onGetAuthorize?: Function;
  onGetPhoneNumber?: Function;
  onGetRealNameAuthInfo?: Function;
  onOpenSetting?: Function;
  onLaunchApp?: Function;
  onChooseAvatar?: Function;
  onContact?: Function;
};
const defaultProps: ButtonProps = {
  color: "default",
  disabled: false,
  fill: "solid",
  shape: "default",
  size: "middle",
};
const Divider = function (p: ButtonProps) {
  console.log("child");
  const props = { ...defaultProps, ...p };
  console.log(props.children);
  return (
    <View
      className={classnames(
        `${classPrefix}`,
        props.children ? `${classPrefix}-cld` : null
      )}
      onClick={(e) => {
        if (props.onClick) {
          props.onClick(e);
        }
      }}
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
