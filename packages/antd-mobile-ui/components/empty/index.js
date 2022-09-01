import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-empty`;
const defaultProps = {};
const Empty = function (p) {
    const props = Object.assign(Object.assign({}, defaultProps), p);
    return (React.createElement(View, { className: classnames(`${classPrefix}`) },
        !!props.image && (React.createElement(View, { className: `${classPrefix}-icon` }, props.image)),
        !!props.description && (React.createElement(View, { className: `${classPrefix}-infos` },
            React.createElement(Text, { className: `${classPrefix}-info` }, props.description)))));
};
export default Empty;
