import { ReactNode } from "react";
import "./index.less";
export declare type EmptyProps = {
    image?: ReactNode;
    description?: ReactNode;
};
declare const Empty: (p: EmptyProps) => JSX.Element;
export default Empty;
