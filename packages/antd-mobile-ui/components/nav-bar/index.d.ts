import { ReactNode } from "react";
import "./index.less";
export declare type ButtonProps = {
    back?: string | null;
    backArrow?: ReactNode;
    right?: ReactNode;
    onBack?: Function;
    children?: any;
};
declare const NavBar: (p: ButtonProps) => JSX.Element;
export default NavBar;
