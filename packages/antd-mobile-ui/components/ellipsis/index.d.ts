import React from "react";
import { NativeProps } from "../utils/native-props";
import "./index.less";
export declare type EllipsisProps = {
    content?: string;
    rows?: number;
    onContentClick?: Function;
} & NativeProps<"--border-color">;
declare const Ellipsis: (p: EllipsisProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export default Ellipsis;
