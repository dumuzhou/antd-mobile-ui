import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { renderToBody } from './render-to-body';
export function renderImperatively(element) {
  const Wrapper = React.forwardRef((_, ref) => {
    const [visible, setVisible] = useState(false);
    const closedRef = useRef(false);
    const [elementToRender, setElementToRender] = useState(element);
    const keyRef = useRef(0);
    useEffect(() => {
      if (!closedRef.current) {
        setVisible(true);
      } else {
        afterClose();
      }
    }, []);

    function onClose() {
      var _a, _b;

      closedRef.current = true;
      setVisible(false);
      (_b = (_a = elementToRender.props).onClose) === null || _b === void 0 ? void 0 : _b.call(_a);
    }

    function afterClose() {
      var _a, _b;

      unmount();
      (_b = (_a = elementToRender.props).afterClose) === null || _b === void 0 ? void 0 : _b.call(_a);
    }

    useImperativeHandle(ref, () => ({
      close: onClose,
      replace: element => {
        var _a, _b;

        keyRef.current++;
        (_b = (_a = elementToRender.props).afterClose) === null || _b === void 0 ? void 0 : _b.call(_a);
        setElementToRender(element);
      }
    }));
    return React.cloneElement(elementToRender, Object.assign(Object.assign({}, elementToRender.props), {
      key: keyRef.current,
      visible,
      onClose,
      afterClose
    }));
  });
  const wrapperRef = React.createRef();
  const unmount = renderToBody(React.createElement(Wrapper, {
    ref: wrapperRef
  }));
  return {
    close: () => {
      var _a;

      (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.close();
    },
    replace: element => {
      var _a;

      (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.replace(element);
    }
  };
}