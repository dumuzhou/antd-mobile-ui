import { FC, ReactNode } from "react";
import "./index.less";
export declare type StepProps = {
    title?: ReactNode;
    description?: string;
    status?: "wait" | "process" | "finish" | "error";
};
export declare const Step: FC<StepProps>;
export declare type StepsProps = {
    direction?: "horizontal" | "vertical";
    current?: number;
    children?: any;
};
export declare const Steps: (p: StepsProps) => JSX.Element;
