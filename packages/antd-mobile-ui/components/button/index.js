import classnames from "classnames";
import React from "react";
import { Button as TaroButton, View, Text } from "@tarojs/components";
import { withNativeProps } from "../utils/native-props";
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
    return withNativeProps(props, React.createElement(TaroButton, { className: classnames(`${classPrefix}`, props.color ? `${classPrefix}-color-${props.color}` : null, props.size ? `${classPrefix}-${props.size}` : null, props.shape ? `${classPrefix}-${props.shape}` : null, props.fill ? `${classPrefix}-fill-${props.fill}` : null, props.disabled ? `${classPrefix}-${props.disabled}` : null, {
            [`${classPrefix}-disabled`]: props.disabled,
        }), onClick: (e) => {
            var _a;
            console.log("类型");
            console.log(typeof props.children);
            if (!props.disabled) {
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
        }, onGetUserInfo: (e) => {
            var _a;
            (_a = props.onGetUserInfo) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }, onContact: (e) => {
            var _a;
            (_a = props.onContact) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }, onOpenSetting: (e) => {
            var _a;
            (_a = props.onOpenSetting) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }, onGetPhoneNumber: (e) => {
            var _a;
            (_a = props.onGetPhoneNumber) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }, onGetAuthorize: (e) => {
            var _a;
            (_a = props.onGetAuthorize) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }, hoverStyle: {
            opacity: 0.6,
        }, disabled: props.disabled },
        props.disabled && (React.createElement(View, { className: `${classPrefix}-disabled`, onClick: (e) => { } })),
        typeof props.children === "string" && (React.createElement(Text, { className: classnames(`${classPrefix}-text`, props.color ? `${classPrefix}-text-${props.color}` : null, props.size ? `${classPrefix}-text-${props.size}` : null, props.fill ? `${classPrefix}-text-${props.fill}` : null, (props.fill === "outline" || props.fill === "none") && props.color
                ? `${classPrefix}-text-fill-${props.color}`
                : null, {
                [`${classPrefix}-text-disabled`]: props.disabled,
            }) }, props.children)),
        typeof props.children === "object" && props.children));
};
export default TmButton;
