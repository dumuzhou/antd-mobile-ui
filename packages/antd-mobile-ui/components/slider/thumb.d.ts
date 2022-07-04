import React, { FC, RefObject, ReactNode } from 'react';
import { NativeProps } from '../../utils/native-props';
declare type ThumbProps = {
    value: number;
    min: number;
    max: number;
    disabled: boolean;
    onDrag: (value: number, first: boolean, last: boolean) => void;
    trackRef: RefObject<HTMLDivElement>;
    icon?: React.ReactNode;
    popover: boolean | ((value: number) => ReactNode);
} & NativeProps;
declare const Thumb: FC<ThumbProps>;
export default Thumb;
