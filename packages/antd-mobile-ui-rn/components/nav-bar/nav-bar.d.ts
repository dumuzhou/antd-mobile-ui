import React, { FC, ReactNode } from 'react';
import { NativeProps } from '../../utils/native-props';
export declare type NavBarProps = {
    back?: string | null;
    backArrow?: boolean | ReactNode;
    left?: ReactNode;
    right?: ReactNode;
    onBack?: () => void;
    children?: React.ReactNode;
} & NativeProps<'--height' | '--border-bottom'>;
export declare const NavBar: FC<NavBarProps>;
