import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC, ReactNode } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";

import { NativeProps, withNativeProps } from "../utils/native-props";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-ellipsis`;

export type EllipsisProps = {
  content?: string;
  rows?: number;
  onContentClick?: Function;
} & NativeProps<"--border-color">;
const defaultProps: EllipsisProps = {
  rows: 1,
};
const Ellipsis = function (p: EllipsisProps) {
  const props = { ...defaultProps, ...p };
  return withNativeProps(
    props,

    <View
      className={classnames(`${classPrefix}`)}
      onClick={(e) => {
        props.onContentClick?.(e);
      }}
    >
      <Text
        // @ts-ignore
        numberOfLines={props.rows}
        className={classnames(`${classPrefix}-text`)}
        // @ts-ignore
        style={Object.assign(
          {},
          process.env.TARO_ENV !== "rn"
            ? {
                "-webkit-line-clamp": props.rows,
              }
            : {}
        )}
      >
        {!!props.content && props.content}
      </Text>
    </View>
  );
};
export default Ellipsis;
