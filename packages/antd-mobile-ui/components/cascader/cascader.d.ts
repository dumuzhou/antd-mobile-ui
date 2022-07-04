import React, { ReactNode } from 'react';
import { PopupProps } from '../popup';
import { CascaderValue, CascaderValueExtend, CascaderOption } from '../cascader-view';
import { NativeProps } from '../../utils/native-props';
export declare type CascaderActions = {
    open: () => void;
    close: () => void;
    toggle: () => void;
};
export declare type CascaderRef = CascaderActions;
export declare type CascaderProps = {
    options: CascaderOption[];
    value?: CascaderValue[];
    defaultValue?: CascaderValue[];
    placeholder?: string;
    onSelect?: (value: CascaderValue[], extend: CascaderValueExtend) => void;
    onConfirm?: (value: CascaderValue[], extend: CascaderValueExtend) => void;
    onCancel?: () => void;
    onClose?: () => void;
    visible?: boolean;
    title?: ReactNode;
    confirmText?: ReactNode;
    cancelText?: ReactNode;
    children?: (items: (CascaderOption | null)[], actions: CascaderActions) => ReactNode;
    onTabsChange?: (index: number) => void;
} & Pick<PopupProps, 'getContainer' | 'afterShow' | 'afterClose' | 'onClick' | 'stopPropagation' | 'destroyOnClose' | 'forceRender'> & NativeProps;
export declare const Cascader: React.ForwardRefExoticComponent<{
    options: CascaderOption[];
    value?: string[] | undefined;
    defaultValue?: string[] | undefined;
    placeholder?: string | undefined;
    onSelect?: ((value: CascaderValue[], extend: CascaderValueExtend) => void) | undefined;
    onConfirm?: ((value: CascaderValue[], extend: CascaderValueExtend) => void) | undefined;
    onCancel?: (() => void) | undefined;
    onClose?: (() => void) | undefined;
    visible?: boolean | undefined;
    title?: ReactNode;
    confirmText?: ReactNode;
    cancelText?: ReactNode;
    children?: ((items: (CascaderOption | null)[], actions: CascaderActions) => ReactNode) | undefined;
    onTabsChange?: ((index: number) => void) | undefined;
} & Pick<PopupProps, "onClick" | "destroyOnClose" | "forceRender" | "getContainer" | "afterShow" | "afterClose" | "stopPropagation"> & {
    className?: string | undefined;
    style?: (React.CSSProperties & Partial<Record<never, string>>) | undefined;
    tabIndex?: number | undefined;
} & React.AriaAttributes & React.RefAttributes<CascaderActions>>;
