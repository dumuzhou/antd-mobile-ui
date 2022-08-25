import classnames from "classnames";
import React, { useState, useEffect, } from "react";
import { View, Text } from "@tarojs/components";
import { traverseReactNode } from "../utils/traverse-react-node";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-side-bar`;
/* istanbul ignore next */
export const SideBarItem = () => {
    return null;
};
const defaultProps = {
    activeKey: "",
};
export const SideBar = function (p) {
    let firstActiveKey = null;
    const props = Object.assign(Object.assign({}, defaultProps), p);
    const items = [];
    traverseReactNode(props.children, (child, index) => {
        if (!React.isValidElement(child))
            return;
        const key = child.key;
        if (typeof key !== "string")
            return;
        if (index === 0) {
            firstActiveKey = key;
        }
        items.push(child);
    });
    const [crt, setCrt] = useState(props.activeKey || firstActiveKey);
    useEffect(() => {
        var _a;
        console.log("crt变化");
        console.log(crt);
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, crt);
    }, [crt]);
    //console.log("items");
    //console.log(items);
    //items.map((item) => {
    //console.log("item");
    //console.log(item);
    //console.log(item.key);
    //console.log(item.props.title);
    //});
    return (React.createElement(View, { className: classnames(`${classPrefix}`) }, items.map((item, index) => {
        return (React.createElement(View, { className: classnames(`${classPrefix}-item`, item.key === crt ? `${classPrefix}-item-crt` : null), 
            // @ts-ignore
            key: item.key, onClick: () => {
                if (crt !== item.key) {
                    // @ts-ignore
                    setCrt(item.key);
                }
            } },
            React.createElement(View, { className: classnames(`${classPrefix}-item-gang`, item.key === crt ? `${classPrefix}-item-gang-crt` : null) }),
            React.createElement(View, { className: classnames(`${classPrefix}-item-wrap`) },
                React.createElement(Text, { className: classnames(`${classPrefix}-item-text`, item.key === crt ? `${classPrefix}-item-text-crt` : null) }, item.props.title))));
    })));
};
//export default SideBar;
