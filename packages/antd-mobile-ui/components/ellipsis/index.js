import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
import { withNativeProps } from "../utils/native-props";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-ellipsis`;
const defaultProps = {
    rows: 1,
};
const Ellipsis = function (p) {
    const props = Object.assign(Object.assign({}, defaultProps), p);
    return withNativeProps(props, React.createElement(View, { className: classnames(`${classPrefix}`), onClick: (e) => {
            var _a;
            (_a = props.onContentClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } },
        React.createElement(Text
        // @ts-ignore
        , { 
            // @ts-ignore
            numberOfLines: props.rows, className: classnames(`${classPrefix}-text`), 
            // @ts-ignore
            style: Object.assign({}, process.env.TARO_ENV !== "rn"
                ? {
                    "-webkit-line-clamp": props.rows,
                }
                : {}) }, !!props.content && props.content)));
};
export default Ellipsis;
