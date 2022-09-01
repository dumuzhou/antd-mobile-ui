import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC, ReactNode } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-progress-bar`;

export type ProgressBarProps = {
  percent?: number;
  text?: ReactNode;
  rounded?: boolean;
};
const defaultProps: ProgressBarProps = {
  percent: 0,
  rounded: true,
};
const ProgressBar = function (p: ProgressBarProps) {
  const props = { ...defaultProps, ...p };
  return (
    <View className={classnames(`${classPrefix}`)}>
      <View
        className={classnames(
          `${classPrefix}-wrap`,

          props.rounded ? `${classPrefix}-wrap-radius` : null
        )}
      >
        <View
          className={classnames(
            `${classPrefix}-wrap-box`,

            props.rounded ? `${classPrefix}-wrap-box-radius` : null
          )}
          style={{
            width: `${props.percent}%`,
          }}
        ></View>
      </View>
      {!!props.text && (
        <View className={classnames(`${classPrefix}-texts`)}>
          <Text className={classnames(`${classPrefix}-text`)}>
            {props.text}
          </Text>
        </View>
      )}
    </View>
  );
};
export default ProgressBar;
