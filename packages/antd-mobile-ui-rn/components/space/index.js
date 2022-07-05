import classnames from "classnames";
import React from "react";
import { View } from "@tarojs/components";
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import "./index.less";
const defaultProps = {
    direction: "horizontal",
    justify: "start",
    align: "center",
    wrap: false,
};
const TmButton = function (p) {
    const props = { ...defaultProps, ...p };
    return (<View className={classnames("m-space", props.justify ? `m-space-justify-${props.justify}` : null, props.align ? `m-space-align-${props.align}` : null, {
            [`m-space-vertical`]: props.direction === "vertical",
            [`m-space-wrap`]: props.wrap,
        })}>
      {React.Children.map(props.children, (child) => {
            return (child !== null &&
                child !== undefined && (<View className={classnames("m-space-item", {
                    [`m-space-item-wrap`]: props.wrap,
                    [`m-space-item-vertical`]: props.direction === "vertical",
                })}>
              {child}
            </View>));
        })}
    </View>);
};
export default TmButton;
