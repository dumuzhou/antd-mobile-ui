import classnames from "classnames";
import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-notice-bar`;
const defaultProps = {
    color: "default",
};
const NoticeBar = function (p) {
    const props = Object.assign(Object.assign({}, defaultProps), p);
    const [show, setShow] = useState(true);
    return (React.createElement(View, { className: classnames(`${classPrefix}`, props.color ? `${classPrefix}-${props.color}` : null, !show ? `${classPrefix}-hide` : null) },
        React.createElement(View, { className: `${classPrefix}-wrap` },
            !!props.icon && (React.createElement(View, { className: `${classPrefix}-ico` }, props.icon)),
            React.createElement(Text, { className: classnames(`${classPrefix}-text`, props.color ? `${classPrefix}-text-${props.color}` : null) }, props.content)),
        !!props.extra && (React.createElement(View, { className: `${classPrefix}-ico1`, onClick: () => {
                var _a;
                setShow(!show);
                (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
            } }, props.extra))));
};
export default NoticeBar;
