import React from "react";
import { NativeProps } from "../utils/native-props";
import "./index.less";
export declare type PageIndicatorProps = {
    total: number;
    current?: number;
    direction?: "horizontal" | "vertical";
    color?: "primary" | "white";
    children?: any;
} & NativeProps<"--border-color">;
declare const PageIndicator: (p: PageIndicatorProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export default PageIndicator;
