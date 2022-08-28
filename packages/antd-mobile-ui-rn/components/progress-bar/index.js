import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-progress-bar`;
const defaultProps = {
    percent: 0,
    rounded: true,
};
const ProgressBar = function (p) {
    const props = { ...defaultProps, ...p };
    return (<View className={classnames(`${classPrefix}`)}>
      <View className={classnames(`${classPrefix}-wrap`, props.rounded ? `${classPrefix}-wrap-radius` : null)}>
        <View className={classnames(`${classPrefix}-wrap-box`, props.rounded ? `${classPrefix}-wrap-box-radius` : null)} style={{
            width: `${props.percent}%`,
        }}></View>
      </View>
      {!!props.text && (<View className={classnames(`${classPrefix}-texts`)}>
          <Text className={classnames(`${classPrefix}-text`)}>
            {props.text}
          </Text>
        </View>)}
    </View>);
};
export default ProgressBar;
