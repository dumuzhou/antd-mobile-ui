import classnames from "classnames";
import React from "react";
import { View, Text } from "@tarojs/components";
import { traverseReactNode } from "../utils/traverse-react-node";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const classPrefix = `adm-steps`;
/* istanbul ignore next */
export const Step = () => {
    return null;
};
const defaultProps = {
    current: 0,
    direction: "horizontal",
};
export const Steps = function (p) {
    const props = { ...defaultProps, ...p };
    const items = [];
    traverseReactNode(props.children, (child, index) => {
        if (!React.isValidElement(child))
            return;
        const key = child.key;
        if (typeof key !== "string")
            return;
        items.push(child);
    });
    return (<View className={classnames(`${classPrefix}`, `${classPrefix}-${props.direction}`)}>
      {items.map((item, index) => {
            let status;
            if (item.props.status) {
                status = item.props.status;
            }
            else if (props.current !== -1) {
                //  根据current算当前状态
                // @ts-ignore
                if (index < props.current) {
                    status = "finish";
                }
                else if (index === props.current) {
                    status = "process";
                }
                else {
                    status = "wait";
                }
            }
            return (<View className={classnames(`${classPrefix}-item`, `${classPrefix}-item-${props.direction}`)} 
            // @ts-ignore
            key={item.key}>
            <View className={classnames(`${classPrefix}-item-top`, `${classPrefix}-item-top-${props.direction}`)}>
              <View className={classnames(`${classPrefix}-item-top-line`, `${classPrefix}-item-top-line-${props.direction}`, index === 0 ? `${classPrefix}-item-top-line-hide` : null, `${classPrefix}-item-top-line-left-${status}`)}></View>

              <View className={classnames(`${classPrefix}-item-top-point`, `${classPrefix}-item-top-point-${status}`)}></View>

              <View className={classnames(`${classPrefix}-item-top-line`, `${classPrefix}-item-top-line-${props.direction}`, index === items.length - 1
                    ? `${classPrefix}-item-top-line-hide`
                    : null, `${classPrefix}-item-top-line-right-${status}`)}></View>
            </View>
            <View className={classnames(`${classPrefix}-item-wrap`, `${classPrefix}-item-wrap-${props.direction}`, !!item.props.description
                    ? `${classPrefix}-item-wrap-${props.direction}-info`
                    : null)}>
              <View className={classnames(`${classPrefix}-item-title`, `${classPrefix}-item-title-${props.direction}`)}>
                <Text className={classnames(`${classPrefix}-item-title-text`, `${classPrefix}-item-title-text-${status}`)}>
                  {item.props.title}
                </Text>
              </View>
              {!!item.props.description && (<View className={classnames(`${classPrefix}-item-info`)}>
                  <Text className={classnames(`${classPrefix}-item-info-text`)}>
                    {item.props.description}
                  </Text>
                </View>)}
            </View>
          </View>);
        })}
    </View>);
};
//export default SideBar;
