import { ReactNode } from "react";
import "./index.less";
export declare type ProgressBarProps = {
    percent?: number;
    text?: ReactNode;
    rounded?: boolean;
};
declare const ProgressBar: (p: ProgressBarProps) => JSX.Element;
export default ProgressBar;
