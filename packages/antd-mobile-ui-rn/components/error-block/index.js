import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-error-block`;
const defaultProps = {};
const ErrorBlock = function (p) {
    const props = { ...defaultProps, ...p };
    return (<View className={classnames(`${classPrefix}`)}>
      {!!props.image && (<View className={`${classPrefix}-icon`}>{props.image}</View>)}
      {!!props.title && (<View className={`${classPrefix}-titles`}>
          <Text className={`${classPrefix}-title`}>{props.title}</Text>
        </View>)}
      {!!props.description && (<View className={`${classPrefix}-infos`}>
          <Text className={`${classPrefix}-info`}>{props.description}</Text>
        </View>)}
    </View>);
};
export default ErrorBlock;
