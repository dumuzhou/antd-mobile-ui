import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, { FC, ReactNode, useState, useEffect } from "react";
import { Button as TaroButton, Form, View, Text } from "@tarojs/components";

import { NativeProps, withNativeProps } from "../utils/native-props";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-selector`;

export type SelectorProps = {
  multiple?: boolean;
  showCheckMark?: boolean;
  icon?: ReactNode;
  value?: string[];
  options: any[];
  onChange?: Function;
} & NativeProps<"--border-color">;
const defaultProps: SelectorProps = {
  multiple: false,
  showCheckMark: true,
  value: [],
  options: [],
};
const Selector = function (p: SelectorProps) {
  const props = { ...defaultProps, ...p };
  const [values, setValues] = useState(props.value || []);
  const [options, setOptions] = useState<any[]>([]);
  useEffect(() => {
    props.onChange?.(values);
  }, [values]);
  //useEffect(() => {
  //console.log("初始化");
  //console.log(props.options);
  //}, props.options);
  return withNativeProps(
    props,

    <View
      className={classnames(
        `${classPrefix}`

        //true ? `${classPrefix}-more` : null
      )}
      onClick={(e) => {}}
    >
      {props.options.map((item, index) => {
        const ind = values.findIndex((ite: any) => {
          return ite === item.value;
        });
        const isCrt = ind > -1;
        console.log("找到");
        console.log(ind);
        console.log(item.value);
        return (
          <View
            className={classnames(
              `${classPrefix}-item`,
              true ? `${classPrefix}-item-auto` : null,
              //true ? `${classPrefix}-item-two` : null,
              isCrt ? `${classPrefix}-item-crt` : null
            )}
            onClick={(e) => {
              let arr: any = [...values];
              if (props.multiple) {
                if (!isCrt) {
                  arr.push(item.value);
                } else {
                  arr.splice(ind, 1);
                }
              } else {
                if (isCrt) {
                  arr = [];
                } else {
                  arr = [item.value];
                }
              }
              setValues(arr);
              console.log("是否选中");
              console.log(isCrt);
              console.log(arr);
            }}
            key={item.value}
          >
            <Text
              className={classnames(
                `${classPrefix}-text`,

                isCrt ? `${classPrefix}-text-crt` : null
              )}
            >
              {item.label}
            </Text>

            {props.showCheckMark && isCrt && !!props.icon && (
              <View className={classnames(`${classPrefix}-check`)}></View>
            )}

            {props.showCheckMark && isCrt && !!props.icon && (
              <View className={classnames(`${classPrefix}-checks`)}>
                {!!props.icon && props.icon}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};
export default Selector;
