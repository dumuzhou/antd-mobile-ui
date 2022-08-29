import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC, ReactNode } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
import Button from "../button";

const classPrefix = `adm-stepper`;

export type StepperProps = {
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
};
const defaultProps: StepperProps = {
  color: "default",
  disabled: false,
  fill: "solid",
  shape: "default",
  size: "middle",
};
const Stepper = function (p: StepperProps) {
  const props = { ...defaultProps, ...p };
  return (
    <View className={classnames(`${classPrefix}`)}>
      <Button
        // @ts-ignore
        style={{
          backgroundColor: "#f5f5f5",
          width: Taro.pxTransform(56),
          height: Taro.pxTransform(56),
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          borderRadius: 0,
          borderWidth: 0,
        }}
      >
        {
          //<Text>-</Text>
        }

        {<View className={classnames(`${classPrefix}-dec`)}></View>}
      </Button>
    </View>
  );
};
export default Stepper;
