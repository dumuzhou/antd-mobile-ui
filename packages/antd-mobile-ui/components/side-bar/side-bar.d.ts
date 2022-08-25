import { FC, ReactNode } from "react";
import "./index.less";
export declare type SideBarItemProps = {
    title?: ReactNode;
};
export declare const SideBarItem: FC<SideBarItemProps>;
export declare type SideBarProps = {
    activeKey?: string | null;
    onChange?: Function;
    children?: any;
};
export declare const SideBar: (p: SideBarProps) => JSX.Element;
