import React from "react";
import { View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const defaultProps = {
    title: "示例",
};
const TmButton = function (p) {
    const props = { ...defaultProps, ...p };
    return (<View className={"m-demo-block"}>
      <View className={"m-demo-block-titles"}>
        <Text className="m-demo-block-title">{props.title}</Text>
      </View>
      <View className={"m-demo-block-item"}>{props.children}</View>
    </View>);
};
export default TmButton;
