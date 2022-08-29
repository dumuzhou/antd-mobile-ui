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
    const props = { ...defaultProps, ...p };
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
        return (<View key={index} className={classnames(`${classPrefix}-item`)}>
        <View className={classnames(`${classPrefix}-left`)} onClick={() => {
                onClickLeft(index);
            }}>
          <View className={classnames(`${classPrefix}-left-wrap`)}>
            {Number(value.toFixed(0)) >= index && props.characterSelect}
            {Number(value.toFixed(0)) < index && props.character}
          </View>
        </View>
        <View className={classnames(`${classPrefix}-right`)} onClick={() => {
                onClickRight(index);
            }}>
          <View className={classnames(`${classPrefix}-right-wrap`)}>
            {value >= index && props.characterSelect}
            {value < index && props.character}
          </View>
        </View>
      </View>);
    };
    useEffect(() => {
        props.onChange?.(value);
    }, [value]);
    return withNativeProps(props, <View className={classnames(`${classPrefix}`)}>
      {[1, 2, 3, 4, 5].map((item, index) => {
            return renderIcon(item);
        })}
    </View>);
};
export default Rate;
