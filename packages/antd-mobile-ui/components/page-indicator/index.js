import classnames from "classnames";
import React from "react";
import { View } from "@tarojs/components";
import { withNativeProps } from "../utils/native-props";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-page-indicator`;
const defaultProps = {
    total: 0,
    current: 0,
    direction: "horizontal",
    color: "primary",
};
const PageIndicator = function (p) {
    const props = Object.assign(Object.assign({}, defaultProps), p);
    const items = [];
    for (let i = 0; i < props.total; i++) {
        items.push(React.createElement(View, { key: i, className: classnames(`${classPrefix}-item`, props.direction === "vertical" ? `${classPrefix}-item-column` : null, {
                [`${classPrefix}-item-crt`]: props.current === i,
                [`${classPrefix}-item-white`]: props.color === "white" && props.current === i,
            }, props.direction === "vertical" && props.current === i
                ? `${classPrefix}-item-crt-column`
                : null) }));
    }
    return withNativeProps(props, React.createElement(View, { className: classnames(`${classPrefix}`, `${classPrefix}-${props.direction}`) }, items));
};
export default PageIndicator;
