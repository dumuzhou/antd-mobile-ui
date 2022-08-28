import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-badge`;
export const dot = React.createElement(React.Fragment, null);
const defaultProps = {};
export const Badge = function (p) {
    const props = Object.assign(Object.assign({}, defaultProps), p);
    const isDot = props.content === dot;
    return (React.createElement(View, { className: classnames(`${classPrefix}`) },
        React.createElement(View, { className: classnames(`${classPrefix}-box`, isDot ? `${classPrefix}-box-dot` : null, !!props.children ? `${classPrefix}-box-ab` : null) },
            React.createElement(View, { className: classnames(`${classPrefix}-wrap`, isDot ? `${classPrefix}-wrap-dot` : null) }, !isDot && !!props.content && (React.createElement(Text, { className: `${classPrefix}-text` }, props.content)))),
        !!props.children && props.children));
};
