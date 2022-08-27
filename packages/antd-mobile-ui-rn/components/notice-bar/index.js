import classnames from "classnames";
import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-notice-bar`;
const defaultProps = {
    color: "default",
};
const NoticeBar = function (p) {
    const props = { ...defaultProps, ...p };
    const [show, setShow] = useState(true);
    return (<View className={classnames(`${classPrefix}`, props.color ? `${classPrefix}-${props.color}` : null, !show ? `${classPrefix}-hide` : null)}>
      <View className={`${classPrefix}-wrap`}>
        {!!props.icon && (<View className={`${classPrefix}-ico`}>{props.icon}</View>)}
        <Text className={classnames(`${classPrefix}-text`, props.color ? `${classPrefix}-text-${props.color}` : null)}>
          {props.content}
        </Text>
      </View>
      {!!props.extra && (<View className={`${classPrefix}-ico1`} onClick={() => {
                setShow(!show);
                props.onClose?.();
            }}>
          {props.extra}
        </View>)}
    </View>);
};
export default NoticeBar;
