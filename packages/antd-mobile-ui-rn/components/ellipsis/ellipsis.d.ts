import React, { FC } from 'react';
import { NativeProps } from '../../utils/native-props';
import { PropagationEvent } from '../../utils/with-stop-propagation';
export declare type EllipsisProps = {
    content: string;
    direction?: 'start' | 'end' | 'middle';
    rows?: number;
    expandText?: string;
    collapseText?: string;
    stopPropagationForActionButtons?: PropagationEvent[];
    onContentClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
} & NativeProps;
export declare const Ellipsis: FC<EllipsisProps>;
