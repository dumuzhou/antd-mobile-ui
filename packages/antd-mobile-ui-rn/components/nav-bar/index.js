import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-nav-bar`;
const defaultProps = {};
const NavBar = function (p) {
    const props = { ...defaultProps, ...p };
    return (<View className={classnames(`${classPrefix}`)}>
      <View className={classnames(`${classPrefix}-left`)} onClick={() => {
            if (props.onBack) {
                props.onBack();
            }
        }}>
        {props.back !== null && !!props.backArrow && (<View className={classnames(`${classPrefix}-left-ico`)}>
            {props.backArrow}
          </View>)}
        {props.back !== null && !!props.back && (<Text className={classnames(`${classPrefix}-left-text`)}>
            {props.back}
          </Text>)}
      </View>
      <View className={classnames(`${classPrefix}-title`)}>
        <Text className={classnames(`${classPrefix}-title-text`)} 
    // @ts-ignore
    numberOfLines={1}>
          {!!props.children && props.children}
        </Text>
      </View>

      {false && (<View className={classnames(`${classPrefix}-right`)}>
          <View className={classnames(`${classPrefix}-right-ico`)}></View>
        </View>)}
    </View>);
};
export default NavBar;
