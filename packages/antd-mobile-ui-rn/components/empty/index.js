import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-empty`;
const defaultProps = {};
const Empty = function (p) {
    const props = { ...defaultProps, ...p };
    return (<View className={classnames(`${classPrefix}`)}>
      {!!props.image && (<View className={`${classPrefix}-icon`}>{props.image}</View>)}
      {!!props.description && (<View className={`${classPrefix}-infos`}>
          <Text className={`${classPrefix}-info`}>{props.description}</Text>
        </View>)}
    </View>);
};
export default Empty;
