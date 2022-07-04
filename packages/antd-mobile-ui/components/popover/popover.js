import { __awaiter } from "tslib";
import React, { forwardRef, useImperativeHandle, useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { usePropsValue } from '../../utils/use-props-value';
import { mergeProps } from '../../utils/with-default-props';
import { withNativeProps } from '../../utils/native-props';
import { withStopPropagation } from '../../utils/with-stop-propagation';
import { Arrow } from './arrow';
import { renderToContainer } from '../../utils/render-to-container';
import { arrow, computePosition, flip, offset, autoUpdate, hide, shift, limitShift } from '@floating-ui/dom';
import { Wrapper } from './wrapper';
import { useShouldRender } from '../../utils/should-render';
import { useClickAway, useIsomorphicLayoutEffect } from 'ahooks';
import { normalizePlacement } from './normalize-placement';
import { convertPx } from '../../utils/convert-px';
const classPrefix = `adm-popover`;
const defaultProps = {
  placement: 'top',
  defaultVisible: false,
  stopPropagation: ['click'],
  getContainer: () => document.body
};
export const Popover = forwardRef((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const {
    mode = 'light'
  } = props;
  const placement = normalizePlacement(props.placement);
  const [visible, setVisible] = usePropsValue({
    value: props.visible,
    defaultValue: props.defaultVisible,
    onChange: props.onVisibleChange
  });
  useImperativeHandle(ref, () => {
    return {
      show: () => setVisible(true),
      hide: () => setVisible(false),
      visible
    };
  }, [visible]);
  const targetRef = useRef(null);
  const floatingRef = useRef(null);
  const arrowRef = useRef(null);
  const floating = withStopPropagation(props.stopPropagation, withNativeProps(props, React.createElement("div", {
    className: classNames(classPrefix, `${classPrefix}-${mode}`, !visible && `${classPrefix}-hidden`),
    ref: floatingRef
  }, React.createElement("div", {
    className: `${classPrefix}-arrow`,
    ref: arrowRef
  }, React.createElement(Arrow, {
    className: `${classPrefix}-arrow-icon`
  })), React.createElement("div", {
    className: `${classPrefix}-inner`
  }, React.createElement("div", {
    className: `${classPrefix}-inner-content`
  }, props.content)))));
  const [targetElement, setTargetElement] = useState(null);

  function update() {
    var _a, _b, _c;

    return __awaiter(this, void 0, void 0, function* () {
      const target = (_b = (_a = targetRef.current) === null || _a === void 0 ? void 0 : _a.element) !== null && _b !== void 0 ? _b : null;
      const floating = floatingRef.current;
      const arrowElement = arrowRef.current;
      setTargetElement(target);
      if (!target || !floating || !arrowElement) return;
      const {
        x,
        y,
        placement: realPlacement,
        middlewareData
      } = yield computePosition(target, floating, {
        placement,
        middleware: [offset(convertPx(12)), shift({
          padding: convertPx(4),
          crossAxis: false,
          limiter: limitShift()
        }), flip(), hide(), arrow({
          element: arrowElement,
          padding: convertPx(12)
        })]
      });
      Object.assign(floating.style, {
        left: `${x}px`,
        top: `${y}px`
      });
      const side = realPlacement.split('-')[0];
      const arrowSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[side];
      const {
        x: arrowX,
        y: arrowY
      } = (_c = middlewareData.arrow) !== null && _c !== void 0 ? _c : {};
      Object.assign(arrowElement.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [arrowSide]: `-${convertPx(8)}px`
      });
      const arrowRotate = {
        top: '0deg',
        bottom: '180deg',
        left: '270deg',
        right: '90deg'
      }[side];
      arrowElement.style.setProperty('--arrow-icon-rotate', arrowRotate);
    });
  }

  useIsomorphicLayoutEffect(() => {
    update();
  });
  useEffect(() => {
    if (!targetElement) return;
    if (!props.trigger) return;

    function handleClick() {
      setVisible(v => !v);
    }

    targetElement.addEventListener('click', handleClick);
    return () => {
      targetElement.removeEventListener('click', handleClick);
    };
  }, [targetElement, props.trigger]);
  useEffect(() => {
    const floatingElement = floatingRef.current;
    if (!targetElement || !floatingElement) return;
    return autoUpdate(targetElement, floatingElement, update, {
      elementResize: typeof ResizeObserver !== 'undefined'
    });
  }, [targetElement]);
  useClickAway(() => {
    if (!props.trigger) return;
    setVisible(false);
  }, () => {
    var _a;

    return (_a = targetRef.current) === null || _a === void 0 ? void 0 : _a.element;
  });
  const shouldRender = useShouldRender(visible, false, props.destroyOnHide);
  return React.createElement(React.Fragment, null, React.createElement(Wrapper, {
    ref: targetRef
  }, props.children), shouldRender && renderToContainer(props.getContainer, floating));
});