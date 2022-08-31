import React from "react";
import { NativeProps } from "../utils/native-props";
import "./index.less";
export declare type TagProps = {
    color?: string;
    fill?: "solid" | "outline";
    children?: any;
    round?: boolean;
    onClick?: Function;
} & NativeProps<"--border-color">;
declare const Tag: (p: TagProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export default Tag;
