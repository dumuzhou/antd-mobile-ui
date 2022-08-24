import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-divider`;
const defaultProps = {
    direction: "horizontal",
};
const Divider = function (p) {
    console.log("child");
    const props = { ...defaultProps, ...p };
    console.log(props.children);
    if (props.direction === "vertical") {
        return (<View className={classnames(`${classPrefix}`, `${classPrefix}-ver`)}></View>);
    }
    return (<View className={classnames(`${classPrefix}`, props.children ? `${classPrefix}-cld` : null)}>
      <View className={classnames(`${classPrefix}-line`)}></View>
      {!!props.children && (<View className={classnames(`${classPrefix}-texts`)}>
          <Text className={classnames(`${classPrefix}-text`)}>
            {props.children}
          </Text>
        </View>)}
      {!!props.children && (<View className={classnames(`${classPrefix}-line`)}></View>)}
    </View>);
};
export default Divider;
