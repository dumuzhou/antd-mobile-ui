import React, { ReactElement, ReactNode } from 'react';
import { NativeProps } from '../../utils/native-props';
import { PageIndicatorProps } from '../page-indicator';
export declare type SwiperRef = {
    swipeTo: (index: number) => void;
    swipeNext: () => void;
    swipePrev: () => void;
};
export declare type SwiperProps = {
    defaultIndex?: number;
    allowTouchMove?: boolean;
    autoplay?: boolean;
    autoplayInterval?: number;
    loop?: boolean;
    direction?: 'horizontal' | 'vertical';
    onIndexChange?: (index: number) => void;
    indicatorProps?: Pick<PageIndicatorProps, 'color' | 'style' | 'className'>;
    indicator?: (total: number, current: number) => ReactNode;
    slideSize?: number;
    trackOffset?: number;
    stuckAtBoundary?: boolean;
    rubberband?: boolean;
    children?: ReactElement | ReactElement[];
} & NativeProps<'--height' | '--width' | '--border-radius' | '--track-padding'>;
export declare const Swiper: React.ForwardRefExoticComponent<{
    defaultIndex?: number | undefined;
    allowTouchMove?: boolean | undefined;
    autoplay?: boolean | undefined;
    autoplayInterval?: number | undefined;
    loop?: boolean | undefined;
    direction?: "vertical" | "horizontal" | undefined;
    onIndexChange?: ((index: number) => void) | undefined;
    indicatorProps?: Pick<PageIndicatorProps, "style" | "className" | "color"> | undefined;
    indicator?: ((total: number, current: number) => ReactNode) | undefined;
    slideSize?: number | undefined;
    trackOffset?: number | undefined;
    stuckAtBoundary?: boolean | undefined;
    rubberband?: boolean | undefined;
    children?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
} & {
    className?: string | undefined;
    style?: (React.CSSProperties & Partial<Record<"--width" | "--height" | "--border-radius" | "--track-padding", string>>) | undefined;
    tabIndex?: number | undefined;
} & React.AriaAttributes & React.RefAttributes<SwiperRef>>;
