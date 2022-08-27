/// <reference types="react" />
import "./index.less";
export declare const dot: JSX.Element;
export declare type BadgeProps = {
    content?: string | typeof dot;
    children?: any;
};
export declare const Badge: (p: BadgeProps) => JSX.Element;
