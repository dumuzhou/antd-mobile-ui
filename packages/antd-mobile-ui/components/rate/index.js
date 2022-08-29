import classnames from "classnames";
import React, { useState, useEffect } from "react";
import { View } from "@tarojs/components";
import { withNativeProps } from "../utils/native-props";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-rate`;
const defaultProps = {
    allowHalf: false,
    value: 0,
    readOnly: false,
    allowClear: true,
};
const Rate = function (p) {
    const props = Object.assign(Object.assign({}, defaultProps), p);
    const [value, setValue] = useState(props.value ? props.value : 0);
    const onClickLeft = (index) => {
        if (props.readOnly)
            return;
        let target = index;
        if (props.allowHalf) {
            target = index - 0.5;
        }
        else {
        }
        if (value !== target) {
            setValue(target);
        }
        else {
            if (props.allowClear) {
                setValue(0);
            }
        }
    };
    const onClickRight = (index) => {
        if (props.readOnly)
            return;
        let target = index;
        if (props.allowHalf) {
            //target = index - 0.5;
        }
        else {
        }
        if (value !== target) {
            setValue(target);
        }
        else {
            if (props.allowClear) {
                setValue(0);
            }
        }
    };
    const renderIcon = (index) => {
        return (React.createElement(View, { key: index, className: classnames(`${classPrefix}-item`) },
            React.createElement(View, { className: classnames(`${classPrefix}-left`), onClick: () => {
                    onClickLeft(index);
                } },
                React.createElement(View, { className: classnames(`${classPrefix}-left-wrap`) },
                    Number(value.toFixed(0)) >= index && props.characterSelect,
                    Number(value.toFixed(0)) < index && props.character)),
            React.createElement(View, { className: classnames(`${classPrefix}-right`), onClick: () => {
                    onClickRight(index);
                } },
                React.createElement(View, { className: classnames(`${classPrefix}-right-wrap`) },
                    value >= index && props.characterSelect,
                    value < index && props.character))));
    };
    useEffect(() => {
        var _a;
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, value);
    }, [value]);
    return withNativeProps(props, React.createElement(View, { className: classnames(`${classPrefix}`) }, [1, 2, 3, 4, 5].map((item, index) => {
        return renderIcon(item);
    })));
};
export default Rate;
