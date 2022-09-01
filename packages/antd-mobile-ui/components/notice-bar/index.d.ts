import { ReactNode } from "react";
import "./index.less";
export declare type NoticeBarProps = {
    icon?: ReactNode;
    extra?: ReactNode;
    content?: string;
    color?: "default" | "alert" | "error" | "info";
    onClose?: Function;
};
declare const NoticeBar: (p: NoticeBarProps) => JSX.Element;
export default NoticeBar;
