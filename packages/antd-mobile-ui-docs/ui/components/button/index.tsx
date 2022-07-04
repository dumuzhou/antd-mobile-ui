import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";
//import { ButtonProps } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

export type ButtonProps = {
  color?: "default" | "primary" | "success" | "warning" | "danger";
  disabled?: boolean;
  fill?: "solid" | "outline" | "none";
  shape?: "default" | "rounded" | "rectangular";
  size?: "mini" | "small" | "middle" | "large";
  onClick?: Function;
  children?: any;
};
const defaultProps: ButtonProps = {
  color: "default",
  disabled: false,
  fill: "solid",
  shape: "default",
  size: "middle",
};
const TmButton = function (p: ButtonProps) {
  const props = { ...defaultProps, ...p };
  return (
    <TaroButton
      className={classnames(
        "m-button",
        props.color ? `m-button-color-${props.color}` : null,
        props.size ? `m-button-${props.size}` : null,
        props.shape ? `m-button-${props.shape}` : null,
        props.fill ? `m-button-fill-${props.fill}` : null,
        props.disabled ? `m-button-${props.disabled}` : null,
        {
          [`m-button-disabled`]: props.disabled,
        }
      )}
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
      hoverStyle={{
        opacity: 0.6,
      }}
      disabled={props.disabled}
    >
      {props.disabled && <View className="m-button-disabled"></View>}
      <Text
        className={classnames(
          "m-button-text",
          props.color ? `m-button-text-${props.color}` : null,
          props.size ? `m-button-text-${props.size}` : null,
          props.fill ? `m-button-text-${props.fill}` : null,
          (props.fill === "outline" || props.fill === "none") && props.color
            ? `m-button-text-fill-${props.color}`
            : null,
          {
            [`m-button-text-disabled`]: props.disabled,
          }
        )}
      >
        {props.children}
      </Text>
    </TaroButton>
  );
};
export default TmButton;
