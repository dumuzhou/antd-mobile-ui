import classnames from "classnames";
import React from "react";
import { Button as TaroButton, View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-button`;
const defaultProps = {
    color: "default",
    disabled: false,
    fill: "solid",
    shape: "default",
    size: "middle",
};
const TmButton = function (p) {
    const props = Object.assign(Object.assign({}, defaultProps), p);
    return (React.createElement(TaroButton, { className: classnames(`${classPrefix}`, props.color ? `${classPrefix}-color-${props.color}` : null, props.size ? `${classPrefix}-${props.size}` : null, props.shape ? `${classPrefix}-${props.shape}` : null, props.fill ? `${classPrefix}-fill-${props.fill}` : null, props.disabled ? `${classPrefix}-${props.disabled}` : null, {
            [`${classPrefix}-disabled`]: props.disabled,
        }), onClick: (e) => {
            if (props.onClick) {
                props.onClick(e);
            }
        }, onGetUserInfo: (e) => {
            if (props.onGetUserInfo) {
                props.onGetUserInfo(e);
            }
        }, hoverStyle: {
            opacity: 0.6,
        }, disabled: props.disabled },
        props.disabled && React.createElement(View, { className: `${classPrefix}-disabled` }),
        React.createElement(Text, { className: classnames(`${classPrefix}-text`, props.color ? `${classPrefix}-text-${props.color}` : null, props.size ? `${classPrefix}-text-${props.size}` : null, props.fill ? `${classPrefix}-text-${props.fill}` : null, (props.fill === "outline" || props.fill === "none") && props.color
                ? `${classPrefix}-text-fill-${props.color}`
                : null, {
                [`${classPrefix}-text-disabled`]: props.disabled,
            }) }, props.children)));
};
export default TmButton;
