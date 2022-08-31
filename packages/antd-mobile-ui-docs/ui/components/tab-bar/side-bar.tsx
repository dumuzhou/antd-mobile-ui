import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React, {
  useState,
  useEffect,
  FC,
  ReactNode,
  ReactElement,
  ComponentProps,
} from "react";
import { Form, View, Text } from "@tarojs/components";
import { ButtonProps as ButtonPropsNative } from "@tarojs/components/types/Button";
import Taro from "@tarojs/taro";

import { traverseReactNode } from "../utils/traverse-react-node";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";

const classPrefix = `adm-tab-bar`;

export type TabBarItemProps = {
  title?: ReactNode;
  icon?: ReactNode;
  selectIcon?: ReactNode;
};

/* istanbul ignore next */
export const TabBarItem: FC<TabBarItemProps> = () => {
  return null;
};

export type TabBarProps = {
  activeKey?: string | null;
  onChange?: Function;
  children?: any;
};
const defaultProps: TabBarProps = {
  activeKey: "",
};
export const TabBar = function (p: TabBarProps) {
  let firstActiveKey: string | null = null;
  const props = { ...defaultProps, ...p };

  const items: ReactElement<ComponentProps<typeof TabBarItem>>[] = [];

  traverseReactNode(props.children, (child, index) => {
    if (!React.isValidElement(child)) return;
    const key = child.key;
    if (typeof key !== "string") return;
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
  //items.map((item) => {
  //console.log("item");
  //console.log(item);
  //console.log(item.key);
  //console.log(item.props.title);
  //});

  return (
    <View className={classnames(`${classPrefix}`)}>
      {items.map((item, index) => {
        return (
          <View
            className={classnames(
              `${classPrefix}-item`,

              item.key === crt ? `${classPrefix}-item-crt` : null
            )}
            // @ts-ignore
            key={item.key}
            onClick={() => {
              if (crt !== item.key) {
                // @ts-ignore
                setCrt(item.key);
              }
            }}
          >
            {!!item.props.icon && !!item.props.selectIcon && (
              <View className={classnames(`${classPrefix}-item-icon`)}>
                {item.key !== crt && item.props.icon}
                {item.key === crt && item.props.selectIcon}
              </View>
            )}
            {!!item.props.title && (
              <View className={classnames(`${classPrefix}-item-texts`)}>
                <Text
                  className={classnames(
                    `${classPrefix}-item-text`,
                    item.key === crt ? `${classPrefix}-item-text-crt` : null
                  )}
                >
                  {item.props.title}
                </Text>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};
//export default SideBar;
