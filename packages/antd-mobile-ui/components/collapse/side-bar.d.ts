import { FC, ReactNode } from "react";
import "./index.less";
export declare type TabsTabProps = {
    title?: ReactNode;
    children?: any;
};
export declare const TabsTab: FC<TabsTabProps>;
export declare type TabsProps = {
    accordion?: boolean;
    activeKey?: string | null;
    arrow?: ReactNode;
    selectArrow?: ReactNode;
    onChange?: Function;
    children?: any;
};
export declare const Tabs: (p: TabsProps) => JSX.Element;
