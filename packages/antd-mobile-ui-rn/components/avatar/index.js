import classnames from "classnames";
import React from "react";
import { Image, View, } from "@tarojs/components";
import { withNativeProps } from "../utils/native-props";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-avatar`;
const defaultProps = {
    color: "default",
    disabled: false,
    fill: "solid",
    shape: "default",
    size: "middle",
};
const Avatar = function (p) {
    const props = { ...defaultProps, ...p };
    return withNativeProps(props, <View className={classnames(`${classPrefix}`, props.color ? `${classPrefix}-color-${props.color}` : null, props.size ? `${classPrefix}-${props.size}` : null, props.shape ? `${classPrefix}-${props.shape}` : null, props.fill ? `${classPrefix}-fill-${props.fill}` : null, props.disabled ? `${classPrefix}-${props.disabled}` : null, {
            [`${classPrefix}-disabled`]: props.disabled,
        })}>
      {!!props.fallback && props.fallback}
      {!!props.src && (<Image className={`${classPrefix}-image`} mode={"scaleToFill"} src={props.src}></Image>)}
    </View>);
};
export default Avatar;
