import classnames from 'classnames';
import React from 'react';
import { Button as TaroButton, View, Text } from '@tarojs/components';
//import { AmButtonProps, AmButtonState } from "../../../types/button";
import './index.less';
const defaultProps = {
    color: 'default',
    disabled: false,
    fill: 'solid',
    shape: 'default',
    size: 'middle',
};
const TmButton = function (p) {
    const props = Object.assign(Object.assign({}, defaultProps), p);
    return (React.createElement(TaroButton, { className: classnames('m-button', props.color ? `m-button-color-${props.color}` : null, props.size ? `m-button-${props.size}` : null, props.shape ? `m-button-${props.shape}` : null, props.fill ? `m-button-fill-${props.fill}` : null, props.disabled ? `m-button-${props.disabled}` : null, {
            [`m-button-disabled`]: props.disabled,
        }), onClick: () => {
            if (props.onClick) {
                props.onClick();
            }
        }, hoverStyle: {
            opacity: 0.6,
        }, disabled: props.disabled },
        props.disabled && React.createElement(View, { className: 'm-button-disabled' }),
        React.createElement(Text, { className: classnames('m-button-text', props.color ? `m-button-text-${props.color}` : null, props.size ? `m-button-text-${props.size}` : null, props.fill ? `m-button-text-${props.fill}` : null, (props.fill === 'outline' || props.fill === 'none') && props.color
                ? `m-button-text-fill-${props.color}`
                : null, {
                [`m-button-text-disabled`]: props.disabled,
            }) }, props.children)));
};
export default TmButton;
