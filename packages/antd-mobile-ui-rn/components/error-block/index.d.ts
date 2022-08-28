import { ReactNode } from "react";
import "./index.less";
export declare type ErrorBlockProps = {
    image?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
};
declare const ErrorBlock: (p: ErrorBlockProps) => JSX.Element;
export default ErrorBlock;
