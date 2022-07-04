import React from 'react';
import { PopupProps } from '../popup';
import { NativeProps } from '../../utils/native-props';
export declare type NumberKeyboardProps = {
    visible?: boolean;
    title?: string;
    confirmText?: string | null;
    customKey?: '-' | '.' | 'X';
    randomOrder?: boolean;
    showCloseButton?: boolean;
    onInput?: (v: string) => void;
    onDelete?: () => void;
    onClose?: () => void;
    onConfirm?: () => void;
    closeOnConfirm?: boolean;
    safeArea?: boolean;
} & Pick<PopupProps, 'afterClose' | 'afterShow' | 'getContainer' | 'destroyOnClose' | 'forceRender' | 'stopPropagation'> & NativeProps;
export declare const NumberKeyboard: React.FC<NumberKeyboardProps>;
