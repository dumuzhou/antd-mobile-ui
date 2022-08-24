import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-nav-bar`;
const defaultProps = {};
const NavBar = function (p) {
    const props = Object.assign(Object.assign({}, defaultProps), p);
    return (React.createElement(View, { className: classnames(`${classPrefix}`) },
        React.createElement(View, { className: classnames(`${classPrefix}-left`), onClick: () => {
                if (props.onBack) {
                    props.onBack();
                }
            } },
            props.back !== null && !!props.backArrow && (React.createElement(View, { className: classnames(`${classPrefix}-left-ico`) }, props.backArrow)),
            props.back !== null && !!props.back && (React.createElement(Text, { className: classnames(`${classPrefix}-left-text`) }, props.back))),
        React.createElement(View, { className: classnames(`${classPrefix}-title`) },
            React.createElement(Text, { className: classnames(`${classPrefix}-title-text`), 
                // @ts-ignore
                numberOfLines: 1 }, !!props.children && props.children)),
        false && (React.createElement(View, { className: classnames(`${classPrefix}-right`) },
            React.createElement(View, { className: classnames(`${classPrefix}-right-ico`) })))));
};
export default NavBar;
