import classnames from "classnames";
import React, { useState, useEffect, } from "react";
import { View, Text } from "@tarojs/components";
import { traverseReactNode } from "../utils/traverse-react-node";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-tabs`;
/* istanbul ignore next */
export const TabsTab = () => {
    return null;
};
const defaultProps = {
    activeKey: "",
};
export const Tabs = function (p) {
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
    items.map((item) => {
        console.log("item");
        console.log(item);
        console.log(item.key);
        console.log(item.props.title);
    });
    return (React.createElement(View, { className: classnames(`${classPrefix}`) },
        React.createElement(View, { className: classnames(`${classPrefix}-top`) }, items.map((item, index) => {
            return (React.createElement(View, { className: classnames(`${classPrefix}-items`), 
                // @ts-ignore
                key: item.key, onClick: () => {
                    if (crt !== item.key) {
                        // @ts-ignore
                        setCrt(item.key);
                    }
                } },
                React.createElement(View, { className: classnames(`${classPrefix}-item`, item.key === crt ? `${classPrefix}-item-crt` : null) },
                    item.key === crt && (React.createElement(View, { className: classnames(`${classPrefix}-item-gang`) })),
                    React.createElement(Text, { className: classnames(`${classPrefix}-item-text`, item.key === crt ? `${classPrefix}-item-text-crt` : null) }, item.props.title))));
        })),
        items.map((item, index) => {
            if (!!item.props.children && item.key === crt) {
                return item.props.children;
            }
        })));
};
//export default SideBar;
