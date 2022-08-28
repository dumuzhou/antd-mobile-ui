import { ReactNode } from "react";
import "./index.less";
export declare type ButtonProps = {
    percent?: number;
    text?: ReactNode;
    rounded?: boolean;
};
declare const ProgressBar: (p: ButtonProps) => JSX.Element;
export default ProgressBar;
