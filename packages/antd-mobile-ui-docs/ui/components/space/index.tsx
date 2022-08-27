import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";
//import { ButtonProps } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-space`;
export type SpaceProps = {
  direction?: "horizontal" | "vertical";
  justify?: "start" | "center" | "end" | "between" | "evenly" | "around";
  align?: "start" | "center" | "end" | "stretch";
  wrap?: boolean;
  children?: any;
  onClick?: Function;
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
        `${classPrefix}`,
        props.align ? `${classPrefix}-align-${props.align}` : null,
        {
          [`${classPrefix}-vertical`]: props.direction === "vertical",
          [`${classPrefix}-wrap`]: props.wrap,
        },
        props.justify ? `${classPrefix}-justify-${props.justify}` : null
      )}
      onClick={(e) => {
        if (props.onClick) {
          props.onClick(e);
        }
      }}
    >
      {React.Children.map(props.children, (child) => {
        return (
          child !== null &&
          child !== undefined && (
            <View
              className={classnames(`${classPrefix}-item`, {
                [`${classPrefix}-item-wrap`]: props.wrap,
                [`${classPrefix}-item-vertical`]:
                  props.direction === "vertical",
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
