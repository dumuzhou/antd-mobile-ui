import React, { ReactNode } from 'react';
import { NativeProps } from '../../utils/native-props';
import { PropagationEvent } from '../../utils/with-stop-propagation';
export declare type SwipeActionRef = {
    close: () => void;
    show: (side?: 'left' | 'right') => void;
};
declare type ActionColor = 'light' | 'weak' | 'primary' | 'success' | 'warning' | 'danger';
export declare type Action = {
    key: string | number;
    text: ReactNode;
    color?: ActionColor | string;
    onClick?: (e: React.MouseEvent) => void;
};
export declare type SwipeActionProps = {
    rightActions?: Action[];
    leftActions?: Action[];
    onAction?: (action: Action, e: React.MouseEvent) => void;
    closeOnTouchOutside?: boolean;
    closeOnAction?: boolean;
    children: ReactNode;
    stopPropagation?: PropagationEvent[];
} & NativeProps<'--background'>;
export declare const SwipeAction: React.ForwardRefExoticComponent<{
    rightActions?: Action[] | undefined;
    leftActions?: Action[] | undefined;
    onAction?: ((action: Action, e: React.MouseEvent) => void) | undefined;
    closeOnTouchOutside?: boolean | undefined;
    closeOnAction?: boolean | undefined;
    children: ReactNode;
    stopPropagation?: "click"[] | undefined;
} & {
    className?: string | undefined;
    style?: (React.CSSProperties & Partial<Record<"--background", string>>) | undefined;
    tabIndex?: number | undefined;
} & React.AriaAttributes & React.RefAttributes<SwipeActionRef>>;
export {};
