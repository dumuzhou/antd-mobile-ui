import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-badge`;
export const dot = <React.Fragment />;
const defaultProps = {};
export const Badge = function (p) {
    const props = { ...defaultProps, ...p };
    const isDot = props.content === dot;
    return (<View className={classnames(`${classPrefix}`)}>
      <View className={classnames(`${classPrefix}-box`, isDot ? `${classPrefix}-box-dot` : null, !!props.children ? `${classPrefix}-box-ab` : null)}>
        <View className={classnames(`${classPrefix}-wrap`, isDot ? `${classPrefix}-wrap-dot` : null)}>
          {!isDot && !!props.content && (<Text className={`${classPrefix}-text`}>{props.content}</Text>)}
        </View>
      </View>
      {!!props.children && props.children}
    </View>);
};
