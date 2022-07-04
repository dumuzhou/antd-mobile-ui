import React from "react";
import { View, Text } from "@tarojs/components"; //import { AmButtonProps, AmButtonState } from "../../../types/button";

import "./index.css";
const defaultProps = {
  title: "示例"
};

const TmButton = function (p) {
  const props = Object.assign(Object.assign({}, defaultProps), p);
  return React.createElement(View, {
    className: "m-demo-block"
  }, React.createElement(View, {
    className: "m-demo-block-titles"
  }, React.createElement(Text, {
    className: "m-demo-block-title"
  }, props.title)), React.createElement(View, {
    className: "m-demo-block-item"
  }, props.children));
};

export default TmButton;