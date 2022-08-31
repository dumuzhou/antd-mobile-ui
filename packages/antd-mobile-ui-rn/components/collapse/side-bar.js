import classnames from "classnames";
import React, { useState, useEffect, } from "react";
import { View, Text } from "@tarojs/components";
import { traverseReactNode } from "../utils/traverse-react-node";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-collapse`;
/* istanbul ignore next */
export const TabsTab = () => {
    return null;
};
const defaultProps = {
    accordion: false,
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
    const [crt, setCrt] = useState([props.activeKey || firstActiveKey]);
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
      {items.map((item, index) => {
            // @ts-ignore
            const ind = crt.findIndex((ite) => ite === item.key);
            const isSelect = ind > -1;
            return (<View className={classnames(`${classPrefix}-items`)} 
            // @ts-ignore
            key={item.key} onClick={() => {
                    let tmp = [...crt];
                    if (!isSelect) {
                        if (props.accordion) {
                            // @ts-ignore
                            tmp = [item.key];
                        }
                        else {
                            // @ts-ignore
                            tmp.push(item.key);
                        }
                    }
                    else {
                        tmp.splice(ind, 1);
                    }
                    console.log("选中");
                    console.log(tmp);
                    console.log(ind);
                    setCrt(tmp);
                }}>
            <View className={classnames(`${classPrefix}-titles`)}>
              <View className={classnames(`${classPrefix}-title`)}>
                <Text className={classnames(`${classPrefix}-title-text`)}>
                  {item.props.title}
                </Text>

                <View className={classnames(`${classPrefix}-title-icon`)}>
                  {!isSelect && !!props.arrow && props.arrow}

                  {isSelect && !!props.arrow && props.selectArrow}
                </View>
              </View>
            </View>
            {isSelect && !!item.props.children && (<View className={classnames(`${classPrefix}-content`)}>
                {typeof item.props.children === "string" && (<Text className={classnames(`${classPrefix}-content-text`)}>
                    {item.props.children}
                  </Text>)}

                {typeof item.props.children === "object" && item.props.children}
              </View>)}
          </View>);
        })}
    </View>);
};
//export default SideBar;
