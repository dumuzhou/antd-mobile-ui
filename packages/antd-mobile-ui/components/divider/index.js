import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-divider`;
const defaultProps = {
    direction: "horizontal",
};
const Divider = function (p) {
    console.log("child");
    const props = Object.assign(Object.assign({}, defaultProps), p);
    console.log(props.children);
    if (props.direction === "vertical") {
        return (React.createElement(View, { className: classnames(`${classPrefix}`, `${classPrefix}-ver`) }));
    }
    return (React.createElement(View, { className: classnames(`${classPrefix}`, props.children ? `${classPrefix}-cld` : null) },
        React.createElement(View, { className: classnames(`${classPrefix}-line`) }),
        !!props.children && (React.createElement(View, { className: classnames(`${classPrefix}-texts`) },
            React.createElement(Text, { className: classnames(`${classPrefix}-text`) }, props.children))),
        !!props.children && (React.createElement(View, { className: classnames(`${classPrefix}-line`) }))));
};
export default Divider;
