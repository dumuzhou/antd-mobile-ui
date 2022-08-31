import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
import { withNativeProps } from "../utils/native-props";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-ellipsis`;
const defaultProps = {
    rows: 1,
};
const Ellipsis = function (p) {
    const props = { ...defaultProps, ...p };
    return withNativeProps(props, <View className={classnames(`${classPrefix}`)} onClick={(e) => {
            props.onContentClick?.(e);
        }}>
      <Text 
    // @ts-ignore
    numberOfLines={props.rows} className={classnames(`${classPrefix}-text`)} 
    // @ts-ignore
    style={Object.assign({}, process.env.TARO_ENV !== "rn"
            ? {
                "-webkit-line-clamp": props.rows,
            }
            : {})}>
        {!!props.content && props.content}
      </Text>
    </View>);
};
export default Ellipsis;
