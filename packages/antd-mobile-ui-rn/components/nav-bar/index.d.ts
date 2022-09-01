import { ReactNode } from "react";
import "./index.less";
export declare type NavBarProps = {
    back?: string | null;
    backArrow?: ReactNode;
    right?: ReactNode;
    onBack?: Function;
    children?: any;
};
declare const NavBar: (p: NavBarProps) => JSX.Element;
export default NavBar;
