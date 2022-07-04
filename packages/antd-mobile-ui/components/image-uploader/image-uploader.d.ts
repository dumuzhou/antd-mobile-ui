import React, { FC, InputHTMLAttributes } from 'react';
import { NativeProps } from '../../utils/native-props';
import type { ImageProps } from '../image';
export declare type TaskStatus = 'pending' | 'fail';
export interface ImageUploadItem {
    key?: string | number;
    url: string;
    thumbnailUrl?: string;
    extra?: any;
}
export declare type ImageUploaderProps = {
    defaultValue?: ImageUploadItem[];
    value?: ImageUploadItem[];
    onChange?: (items: ImageUploadItem[]) => void;
    accept?: string;
    multiple?: boolean;
    maxCount?: number;
    onCountExceed?: (exceed: number) => void;
    disableUpload?: boolean;
    showUpload?: boolean;
    deletable?: boolean;
    capture?: InputHTMLAttributes<unknown>['capture'];
    onPreview?: (index: number, item: ImageUploadItem) => void;
    beforeUpload?: (file: File, files: File[]) => Promise<File | null> | File | null;
    upload: (file: File) => Promise<ImageUploadItem>;
    onDelete?: (item: ImageUploadItem) => boolean | Promise<boolean> | void;
    preview?: boolean;
    showFailed?: boolean;
    imageFit?: ImageProps['fit'];
    children?: React.ReactNode;
} & NativeProps<'--cell-size'>;
export declare const ImageUploader: FC<ImageUploaderProps>;
