import classnames from "classnames";
import React, { useState, useEffect, } from "react";
import { View, Text } from "@tarojs/components";
import { traverseReactNode } from "../utils/traverse-react-node";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-tabs`;
/* istanbul ignore next */
export const TabsTab = () => {
    return null;
};
const defaultProps = {
    activeKey: "",
};
export const Tabs = function (p) {
    let firstActiveKey = null;
    const props = { ...defaultProps, ...p };
    const items = [];
    traverseReactNode(props.children, (child, index) => {
        if (!React.isValidElement(child))
            return;
        const key = child.key;
        if (typeof key !== "string")
            return;
        if (index === 0) {
            firstActiveKey = key;
        }
        items.push(child);
    });
    const [crt, setCrt] = useState(props.activeKey || firstActiveKey);
    useEffect(() => {
        console.log("crt变化");
        console.log(crt);
        props.onChange?.(crt);
    }, [crt]);
    //console.log("items");
    //console.log(items);
    items.map((item) => {
        console.log("item");
        console.log(item);
        console.log(item.key);
        console.log(item.props.title);
    });
    return (<View className={classnames(`${classPrefix}`)}>
      <View className={classnames(`${classPrefix}-top`)}>
        {items.map((item, index) => {
            return (<View className={classnames(`${classPrefix}-items`)} 
            // @ts-ignore
            key={item.key} onClick={() => {
                    if (crt !== item.key) {
                        // @ts-ignore
                        setCrt(item.key);
                    }
                }}>
              <View className={classnames(`${classPrefix}-item`, item.key === crt ? `${classPrefix}-item-crt` : null)}>
                {item.key === crt && (<View className={classnames(`${classPrefix}-item-gang`)}></View>)}
                <Text className={classnames(`${classPrefix}-item-text`, item.key === crt ? `${classPrefix}-item-text-crt` : null)}>
                  {item.props.title}
                </Text>
              </View>
            </View>);
        })}
      </View>
      {items.map((item, index) => {
            if (!!item.props.children && item.key === crt) {
                return item.props.children;
            }
        })}
    </View>);
};
//export default SideBar;
