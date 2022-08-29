import React, { ReactNode } from "react";
import { NativeProps } from "../utils/native-props";
import "./index.less";
export declare type SelectorProps = {
    multiple?: boolean;
    showCheckMark?: boolean;
    icon?: ReactNode;
    value?: string[];
    options: any[];
    onChange?: Function;
} & NativeProps<"--border-color">;
declare const Selector: (p: SelectorProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export default Selector;
