import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
import { withNativeProps } from "../utils/native-props";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-tag`;
const defaultProps = {
    color: "default",
    round: false,
    fill: "solid",
};
const Tag = function (p) {
    const props = Object.assign(Object.assign({}, defaultProps), p);
    return withNativeProps(props, React.createElement(View, { className: classnames(`${classPrefix}`, props.color ? `${classPrefix}-color-${props.color}` : null, props.round ? `${classPrefix}-round` : null, props.fill ? `${classPrefix}-fill-${props.fill}` : null), onClick: (e) => {
            var _a;
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } },
        React.createElement(Text, { className: classnames(`${classPrefix}-text`, props.color ? `${classPrefix}-text-${props.color}` : null, props.fill ? `${classPrefix}-text-${props.fill}` : null, props.fill === "outline" && props.color
                ? `${classPrefix}-text-fill-${props.color}`
                : null) }, props.children)));
};
export default Tag;
