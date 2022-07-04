import { FC, ReactNode } from 'react';
import { NativeProps } from '../../utils/native-props';
export declare type Action = {
    key: string | number;
    text: ReactNode;
    disabled?: boolean;
    danger?: boolean;
    primary?: boolean;
    onClick?: () => void | Promise<void>;
} & NativeProps;
export declare const ModalActionButton: FC<{
    action: Action;
    onAction: () => void | Promise<void>;
}>;
