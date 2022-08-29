import "./index.less";
export declare type StepperProps = {
    color?: "default" | "primary" | "success" | "warning" | "danger";
    disabled?: boolean;
    fill?: "solid" | "outline" | "none";
    shape?: "default" | "rounded" | "rectangular";
    size?: "mini" | "small" | "middle" | "large";
    onClick?: Function;
    children?: any;
    scope?: "userInfo" | "phoneNumber";
    onGetUserInfo?: Function;
    onGetAuthorize?: Function;
    onGetPhoneNumber?: Function;
    onOpenSetting?: Function;
    onContact?: Function;
};
declare const Stepper: (p: StepperProps) => JSX.Element;
export default Stepper;
