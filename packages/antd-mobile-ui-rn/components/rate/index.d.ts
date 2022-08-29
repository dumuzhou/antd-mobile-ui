import React, { ReactNode } from "react";
import { NativeProps } from "../utils/native-props";
import "./index.less";
export declare type RateProps = {
    character?: ReactNode;
    characterSelect?: ReactNode;
    allowHalf?: boolean;
    value?: number;
    readOnly?: boolean;
    allowClear?: boolean;
    onChange?: Function;
} & NativeProps<"--border-color">;
declare const Rate: (p: RateProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export default Rate;
