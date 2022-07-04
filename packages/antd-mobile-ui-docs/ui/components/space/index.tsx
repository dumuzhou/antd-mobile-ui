import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";
//import { ButtonProps } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

export type SpaceProps = {
  direction?: "horizontal" | "vertical";
  justify?: "start" | "center" | "end" | "between" | "evenly" | "around";
  align?: "start" | "center" | "end" | "stretch";
  wrap?: boolean;
  children?: any;
};
const defaultProps: SpaceProps = {
  direction: "horizontal",
  justify: "start",
  align: "center",
  wrap: false,
};
const TmButton = function (p: SpaceProps) {
  const props = { ...defaultProps, ...p };
  return (
    <View
      className={classnames(
        "m-space",
        props.justify ? `m-space-justify-${props.justify}` : null,
        props.align ? `m-space-align-${props.align}` : null,
        {
          [`m-space-vertical`]: props.direction === "vertical",
          [`m-space-wrap`]: props.wrap,
        }
      )}
    >
      {React.Children.map(props.children, (child) => {
        return (
          child !== null &&
          child !== undefined && (
            <View
              className={classnames("m-space-item", {
                [`m-space-item-wrap`]: props.wrap,
                [`m-space-item-vertical`]: props.direction === "vertical",
              })}
            >
              {child}
            </View>
          )
        );
      })}
    </View>
  );
};
export default TmButton;
