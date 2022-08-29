import classnames from "classnames";
import React from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
import Button from "../button";
const classPrefix = `adm-stepper`;
const defaultProps = {
    color: "default",
    disabled: false,
    fill: "solid",
    shape: "default",
    size: "middle",
};
const Stepper = function (p) {
    const props = { ...defaultProps, ...p };
    return (<View className={classnames(`${classPrefix}`)}>
      <Button 
    // @ts-ignore
    style={{
            backgroundColor: "#f5f5f5",
            width: Taro.pxTransform(56),
            height: Taro.pxTransform(56),
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            borderWidth: 0,
        }}>
        {
        //<Text>-</Text>
        }

        {<View className={classnames(`${classPrefix}-dec`)}></View>}
      </Button>
    </View>);
};
export default Stepper;
