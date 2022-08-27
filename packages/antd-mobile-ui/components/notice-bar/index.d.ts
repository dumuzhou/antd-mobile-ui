import { ReactNode } from "react";
import "./index.less";
export declare type ButtonProps = {
    icon?: ReactNode;
    extra?: ReactNode;
    content?: string;
    color?: "default" | "alert" | "error" | "info";
    onClose?: Function;
};
declare const NoticeBar: (p: ButtonProps) => JSX.Element;
export default NoticeBar;
