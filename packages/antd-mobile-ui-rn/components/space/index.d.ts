import "./index.less";
export declare type SpaceProps = {
    direction?: "horizontal" | "vertical";
    justify?: "start" | "center" | "end" | "between" | "evenly" | "around";
    align?: "start" | "center" | "end" | "stretch";
    wrap?: boolean;
    children?: any;
};
declare const TmButton: (p: SpaceProps) => JSX.Element;
export default TmButton;
