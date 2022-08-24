import classnames from "classnames";
import React from "react";
import { View } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-space`;
const defaultProps = {
    direction: "horizontal",
    justify: "start",
    align: "center",
    wrap: false,
};
const TmButton = function (p) {
    const props = Object.assign(Object.assign({}, defaultProps), p);
    return (React.createElement(View, { className: classnames(`${classPrefix}`, props.justify ? `${classPrefix}-justify-${props.justify}` : null, props.align ? `${classPrefix}-align-${props.align}` : null, {
            [`${classPrefix}-vertical`]: props.direction === "vertical",
            [`${classPrefix}-wrap`]: props.wrap,
        }), onClick: (e) => {
            if (props.onClick) {
                props.onClick(e);
            }
        } }, React.Children.map(props.children, (child) => {
        return (child !== null &&
            child !== undefined && (React.createElement(View, { className: classnames(`${classPrefix}-item`, {
                [`${classPrefix}-item-wrap`]: props.wrap,
                [`${classPrefix}-item-vertical`]: props.direction === "vertical",
            }) }, child)));
    })));
};
export default TmButton;
