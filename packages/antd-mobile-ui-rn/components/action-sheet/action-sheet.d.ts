import React, { FC, ReactNode } from 'react';
import { NativeProps } from '../../utils/native-props';
import { PopupProps } from '../popup';
export declare type Action = {
    key: string | number;
    text: ReactNode;
    disabled?: boolean;
    description?: ReactNode;
    danger?: boolean;
    onClick?: () => void;
};
export declare type ActionSheetProps = {
    visible?: boolean;
    actions: Action[];
    extra?: React.ReactNode;
    cancelText?: React.ReactNode;
    onAction?: (action: Action, index: number) => void;
    onClose?: () => void;
    onMaskClick?: () => void;
    closeOnAction?: boolean;
    closeOnMaskClick?: boolean;
    safeArea?: boolean;
    popupClassName?: string;
    popupStyle?: React.CSSProperties;
} & Pick<PopupProps, 'afterClose' | 'getContainer' | 'destroyOnClose' | 'forceRender'> & NativeProps;
export declare const ActionSheet: FC<ActionSheetProps>;
export declare type ActionSheetShowHandler = {
    close: () => void;
};
export declare function showActionSheet(props: Omit<ActionSheetProps, 'visible'>): ActionSheetShowHandler;
