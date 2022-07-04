import React, { FC } from 'react';
import { NativeProps } from '../../utils/native-props';
import { FormInstance } from 'rc-field-form';
import type { FieldProps } from 'rc-field-form/lib/Field';
import { ListItemProps } from '../list';
import type { FormLayout } from './index';
declare type RenderChildren<Values = any> = (form: FormInstance<Values>) => React.ReactNode;
declare type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode;
declare type RcFieldProps = Omit<FieldProps, 'children'>;
export declare type FormItemProps = Pick<RcFieldProps, 'dependencies' | 'valuePropName' | 'name' | 'rules' | 'messageVariables' | 'trigger' | 'validateTrigger' | 'shouldUpdate' | 'initialValue'> & Pick<ListItemProps, 'style' | 'extra' | 'clickable' | 'arrow' | 'description'> & {
    label?: React.ReactNode;
    help?: React.ReactNode;
    hasFeedback?: boolean;
    required?: boolean;
    noStyle?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    layout?: FormLayout;
    childElementPosition?: 'normal' | 'right';
    children?: ChildrenType;
    onClick?: (e: React.MouseEvent, widgetRef: React.MutableRefObject<any>) => void;
} & NativeProps;
export declare const FormItem: FC<FormItemProps>;
export {};