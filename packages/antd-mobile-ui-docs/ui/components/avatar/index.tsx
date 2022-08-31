import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC, ReactNode } from "react";
import {
  Button as TaroButton,
  Image,
  Form,
  View,
  Text,
} from "@tarojs/components";

import { NativeProps, withNativeProps } from "../utils/native-props";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-avatar`;

export type AvatarProps = {
  fallback?: ReactNode;
  src?: string;
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
const defaultProps: AvatarProps = {
  color: "default",
  disabled: false,
  fill: "solid",
  shape: "default",
  size: "middle",
};
const Avatar = function (p: AvatarProps) {
  const props = { ...defaultProps, ...p };
  return withNativeProps(
    props,

    <View
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
    >
      {!!props.fallback && props.fallback}
      {!!props.src && (
        <Image
          className={`${classPrefix}-image`}
          mode={"scaleToFill"}
          src={props.src}
        ></Image>
      )}
    </View>
  );
};
export default Avatar;
