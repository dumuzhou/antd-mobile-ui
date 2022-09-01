import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC, ReactNode } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-nav-bar`;

export type NavBarProps = {
  back?: string | null;
  backArrow?: ReactNode;
  right?: ReactNode;
  onBack?: Function;
  children?: any;
};
const defaultProps: NavBarProps = {};
const NavBar = function (p: NavBarProps) {
  const props = { ...defaultProps, ...p };
  return (
    <View className={classnames(`${classPrefix}`)}>
      <View
        className={classnames(`${classPrefix}-left`)}
        onClick={() => {
          if (props.onBack) {
            props.onBack();
          }
        }}
      >
        {props.back !== null && !!props.backArrow && (
          <View className={classnames(`${classPrefix}-left-ico`)}>
            {props.backArrow}
          </View>
        )}
        {props.back !== null && !!props.back && (
          <Text className={classnames(`${classPrefix}-left-text`)}>
            {props.back}
          </Text>
        )}
      </View>
      <View className={classnames(`${classPrefix}-title`)}>
        <Text
          className={classnames(`${classPrefix}-title-text`)}
          // @ts-ignore
          numberOfLines={1}
        >
          {!!props.children && props.children}
        </Text>
      </View>

      {false && (
        <View className={classnames(`${classPrefix}-right`)}>
          <View className={classnames(`${classPrefix}-right-ico`)}></View>
        </View>
      )}
    </View>
  );
};
export default NavBar;
