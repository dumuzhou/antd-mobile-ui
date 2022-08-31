import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC, ReactNode, ReactElement } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";

import { NativeProps, withNativeProps } from "../utils/native-props";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-page-indicator`;

export type PageIndicatorProps = {
  total: number;
  current?: number;
  direction?: "horizontal" | "vertical";

  color?: "primary" | "white";
  children?: any;
} & NativeProps<"--border-color">;
const defaultProps: PageIndicatorProps = {
  total: 0,
  current: 0,
  direction: "horizontal",
  color: "primary",
};
const PageIndicator = function (p: PageIndicatorProps) {
  const props = { ...defaultProps, ...p };

  const items: ReactElement[] = [];
  for (let i = 0; i < props.total; i++) {
    items.push(
      <View
        key={i}
        className={classnames(
          `${classPrefix}-item`,
          props.direction === "vertical" ? `${classPrefix}-item-column` : null,
          {
            [`${classPrefix}-item-crt`]: props.current === i,
            [`${classPrefix}-item-white`]:
              props.color === "white" && props.current === i,
          },
          props.direction === "vertical" && props.current === i
            ? `${classPrefix}-item-crt-column`
            : null
        )}
      />
    );
  }

  return withNativeProps(
    props,

    <View
      className={classnames(
        `${classPrefix}`,
        `${classPrefix}-${props.direction}`
      )}
    >
      {items}
    </View>
  );
};
export default PageIndicator;
