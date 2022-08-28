import { ReactNode } from "react";
import "./index.less";
export declare type ResultProps = {
    icon?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
};
declare const Result: (p: ResultProps) => JSX.Element;
export default Result;
