import React, { FC } from 'react';
import { NativeProps } from '../../utils/native-props';
export declare type FloatingBubbleProps = {
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    axis?: 'x' | 'y' | 'xy' | 'lock';
    magnetic?: 'x' | 'y';
    children?: React.ReactNode;
} & NativeProps<'--initial-position-left' | '--initial-position-right' | '--initial-position-top' | '--initial-position-bottom' | '--z-index' | '--edge-distance' | '--size' | '--border-radius' | '--background'>;
export declare const FloatingBubble: FC<FloatingBubbleProps>;
