import { FC, ReactNode } from "react";
import "./index.less";
export declare type TabBarItemProps = {
    title?: ReactNode;
    icon?: ReactNode;
    selectIcon?: ReactNode;
};
export declare const TabBarItem: FC<TabBarItemProps>;
export declare type TabBarProps = {
    activeKey?: string | null;
    onChange?: Function;
    children?: any;
};
export declare const TabBar: (p: TabBarProps) => JSX.Element;
