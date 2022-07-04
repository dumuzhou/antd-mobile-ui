import './index.less';
export declare type ButtonProps = {
    color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
    disabled?: boolean;
    fill?: 'solid' | 'outline' | 'none';
    shape?: 'default' | 'rounded' | 'rectangular';
    size?: 'mini' | 'small' | 'middle' | 'large';
    onClick?: Function;
    children?: any;
};
declare const TmButton: (p: ButtonProps) => JSX.Element;
export default TmButton;
