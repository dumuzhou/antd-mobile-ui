import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-progress-bar`;
const defaultProps = {
    percent: 0,
    rounded: true,
};
const ProgressBar = function (p) {
    const props = Object.assign(Object.assign({}, defaultProps), p);
    return (React.createElement(View, { className: classnames(`${classPrefix}`) },
        React.createElement(View, { className: classnames(`${classPrefix}-wrap`, props.rounded ? `${classPrefix}-wrap-radius` : null) },
            React.createElement(View, { className: classnames(`${classPrefix}-wrap-box`, props.rounded ? `${classPrefix}-wrap-box-radius` : null), style: {
                    width: `${props.percent}%`,
                } })),
        !!props.text && (React.createElement(View, { className: classnames(`${classPrefix}-texts`) },
            React.createElement(Text, { className: classnames(`${classPrefix}-text`) }, props.text)))));
};
export default ProgressBar;
