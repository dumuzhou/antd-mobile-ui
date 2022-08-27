import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-badge`;

export const dot = <React.Fragment />;

export type BadgeProps = {
  content?: string | typeof dot;
  children?: any;
};
const defaultProps: BadgeProps = {};
export const Badge = function (p: BadgeProps) {
  const props = { ...defaultProps, ...p };
  const isDot = props.content === dot;
  console.log("isDot");
  console.log(isDot);
  return (
    <View className={classnames(`${classPrefix}`)}>
      <View
        className={classnames(
          `${classPrefix}-box`,

          isDot ? `${classPrefix}-box-dot` : null,
          !!props.children ? `${classPrefix}-box-ab` : null
        )}
      >
        <View
          className={classnames(
            `${classPrefix}-wrap`,

            isDot ? `${classPrefix}-wrap-dot` : null
          )}
        >
          {!isDot && !!props.content && (
            <Text className={`${classPrefix}-text`}>{props.content}</Text>
          )}
        </View>
      </View>
      {!!props.children && props.children}
    </View>
  );
};
