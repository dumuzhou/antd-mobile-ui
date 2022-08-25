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

const classPrefix = `adm-side-bar`;

export type SideBarItemProps = {
  title?: ReactNode;
};

/* istanbul ignore next */
export const SideBarItem: FC<SideBarItemProps> = () => {
  return null;
};

export type SideBarProps = {
  activeKey?: string | null;
  onChange?: Function;
  children?: any;
};
const defaultProps: SideBarProps = {
  activeKey: "",
};
export const SideBar = function (p: SideBarProps) {
  let firstActiveKey: string | null = null;
  const props = { ...defaultProps, ...p };

  const items: ReactElement<ComponentProps<typeof SideBarItem>>[] = [];

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
            <View
              className={classnames(
                `${classPrefix}-item-gang`,

                item.key === crt ? `${classPrefix}-item-gang-crt` : null
              )}
            ></View>
            <View className={classnames(`${classPrefix}-item-wrap`)}>
              <Text
                className={classnames(
                  `${classPrefix}-item-text`,
                  item.key === crt ? `${classPrefix}-item-text-crt` : null
                )}
              >
                {item.props.title}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};
//export default SideBar;
