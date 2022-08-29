import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC, ReactNode } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";

import { NativeProps, withNativeProps } from "../utils/native-props";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-button`;

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
  //onGetRealNameAuthInfo?: Function;
  onOpenSetting?: Function;
  //onLaunchApp?: Function;
  //onChooseAvatar?: Function;
  onContact?: Function;
} & NativeProps<"--border-color">;
const defaultProps: ButtonProps = {
  color: "default",
  disabled: false,
  fill: "solid",
  shape: "default",
  size: "middle",
};
const TmButton = function (p: ButtonProps) {
  const props = { ...defaultProps, ...p };
  return withNativeProps(
    props,

    <TaroButton
      className={classnames(
        `${classPrefix}`,
        props.color ? `${classPrefix}-color-${props.color}` : null,
        props.size ? `${classPrefix}-${props.size}` : null,
        props.shape ? `${classPrefix}-${props.shape}` : null,
        props.fill ? `${classPrefix}-fill-${props.fill}` : null,
        props.disabled ? `${classPrefix}-${props.disabled}` : null,
        {
          [`${classPrefix}-disabled`]: props.disabled,
        }
      )}
      onClick={(e) => {
        console.log("类型");
        console.log(typeof props.children);
        if (!props.disabled) {
          props.onClick?.(e);
        }
      }}
      onGetUserInfo={(e) => {
        props.onGetUserInfo?.(e);
      }}
      onContact={(e) => {
        props.onContact?.(e);
      }}
      onOpenSetting={(e) => {
        props.onOpenSetting?.(e);
      }}
      onGetPhoneNumber={(e) => {
        props.onGetPhoneNumber?.(e);
      }}
      onGetAuthorize={(e) => {
        props.onGetAuthorize?.(e);
      }}
      hoverStyle={{
        opacity: 0.6,
      }}
      disabled={props.disabled}
    >
      {props.disabled && (
        <View className={`${classPrefix}-disabled`} onClick={(e) => {}}></View>
      )}
      {typeof props.children === "string" && (
        <Text
          className={classnames(
            `${classPrefix}-text`,
            props.color ? `${classPrefix}-text-${props.color}` : null,
            props.size ? `${classPrefix}-text-${props.size}` : null,
            props.fill ? `${classPrefix}-text-${props.fill}` : null,
            (props.fill === "outline" || props.fill === "none") && props.color
              ? `${classPrefix}-text-fill-${props.color}`
              : null,
            {
              [`${classPrefix}-text-disabled`]: props.disabled,
            }
          )}
        >
          {props.children}
        </Text>
      )}
      {typeof props.children === "object" && props.children}
    </TaroButton>
  );
};
export default TmButton;
