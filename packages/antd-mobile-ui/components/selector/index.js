import classnames from "classnames";
import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { withNativeProps } from "../utils/native-props";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-selector`;
const defaultProps = {
    multiple: false,
    showCheckMark: true,
    value: [],
    options: [],
};
const Selector = function (p) {
    const props = Object.assign(Object.assign({}, defaultProps), p);
    const [values, setValues] = useState(props.value || []);
    const [options, setOptions] = useState([]);
    useEffect(() => {
        var _a;
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, values);
    }, [values]);
    //useEffect(() => {
    //console.log("初始化");
    //console.log(props.options);
    //}, props.options);
    return withNativeProps(props, React.createElement(View, { className: classnames(`${classPrefix}`
        //true ? `${classPrefix}-more` : null
        ), onClick: (e) => { } }, props.options.map((item, index) => {
        const ind = values.findIndex((ite) => {
            return ite === item.value;
        });
        const isCrt = ind > -1;
        console.log("找到");
        console.log(ind);
        console.log(item.value);
        return (React.createElement(View, { className: classnames(`${classPrefix}-item`, true ? `${classPrefix}-item-auto` : null, 
            //true ? `${classPrefix}-item-two` : null,
            isCrt ? `${classPrefix}-item-crt` : null), onClick: (e) => {
                let arr = [...values];
                if (props.multiple) {
                    if (!isCrt) {
                        arr.push(item.value);
                    }
                    else {
                        arr.splice(ind, 1);
                    }
                }
                else {
                    if (isCrt) {
                        arr = [];
                    }
                    else {
                        arr = [item.value];
                    }
                }
                setValues(arr);
                console.log("是否选中");
                console.log(isCrt);
                console.log(arr);
            }, key: item.value },
            React.createElement(Text, { className: classnames(`${classPrefix}-text`, isCrt ? `${classPrefix}-text-crt` : null) }, item.label),
            props.showCheckMark && isCrt && !!props.icon && (React.createElement(View, { className: classnames(`${classPrefix}-check`) })),
            props.showCheckMark && isCrt && !!props.icon && (React.createElement(View, { className: classnames(`${classPrefix}-checks`) }, !!props.icon && props.icon))));
    })));
};
export default Selector;
