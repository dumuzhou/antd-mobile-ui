import React, { forwardRef, useRef, useState, useImperativeHandle } from 'react';
import classNames from 'classnames';
import { withNativeProps } from '../../utils/native-props';
import { useThrottleFn } from 'ahooks';
import { mergeProps } from '../../utils/with-default-props';
import { Sidebar } from './sidebar';
import { convertPx } from '../../utils/convert-px';
import { Panel } from './panel';
import { devWarning } from '../../utils/dev-log';
import { traverseReactNode } from '../../utils/traverse-react-node';
const classPrefix = `adm-index-bar`;
const defaultProps = {
  sticky: true
};
export const IndexBar = forwardRef((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const titleHeight = convertPx(35);
  const bodyRef = useRef(null);
  const indexItems = [];
  const panels = [];
  traverseReactNode(props.children, child => {
    var _a;

    if (!React.isValidElement(child)) return;

    if (child.type !== Panel) {
      devWarning('IndexBar', 'The children of `IndexBar` must be `IndexBar.Panel` components.');
      return;
    }

    indexItems.push({
      index: child.props.index,
      brief: (_a = child.props.brief) !== null && _a !== void 0 ? _a : child.props.index.charAt(0)
    });
    panels.push(withNativeProps(child.props, React.createElement("div", {
      key: child.props.index,
      "data-index": child.props.index,
      className: `${classPrefix}-anchor`
    }, React.createElement("div", {
      className: `${classPrefix}-anchor-title`
    }, child.props.title || child.props.index), child.props.children)));
  });
  const [activeIndex, setActiveIndex] = useState(() => {
    const firstItem = indexItems[0];
    return firstItem ? firstItem.index : null;
  });
  useImperativeHandle(ref, () => ({
    scrollTo
  }));

  function scrollTo(index) {
    var _a;

    const body = bodyRef.current;
    if (!body) return;
    const children = body.children;

    for (let i = 0; i < children.length; i++) {
      const panel = children.item(i);
      if (!panel) continue;
      const panelIndex = panel.dataset['index'];

      if (panelIndex === index) {
        body.scrollTop = panel.offsetTop;
        setActiveIndex(index);
        activeIndex !== index && ((_a = props.onIndexChange) === null || _a === void 0 ? void 0 : _a.call(props, index));
        return;
      }
    }
  }

  const {
    run: checkActiveIndex
  } = useThrottleFn(() => {
    var _a;

    const body = bodyRef.current;
    if (!body) return;
    const scrollTop = body.scrollTop;
    const elements = body.getElementsByClassName(`${classPrefix}-anchor`);

    for (let i = 0; i < elements.length; i++) {
      const panel = elements.item(i);
      if (!panel) continue;
      const panelIndex = panel.dataset['index'];
      if (!panelIndex) continue;

      if (panel.offsetTop + panel.clientHeight - titleHeight > scrollTop) {
        setActiveIndex(panelIndex);
        activeIndex !== panelIndex && ((_a = props.onIndexChange) === null || _a === void 0 ? void 0 : _a.call(props, panelIndex));
        return;
      }
    }
  }, {
    wait: 50,
    trailing: true,
    leading: true
  });
  return withNativeProps(props, React.createElement("div", {
    className: classNames(`${classPrefix}`, {
      [`${classPrefix}-sticky`]: props.sticky
    })
  }, React.createElement(Sidebar, {
    indexItems: indexItems,
    activeIndex: activeIndex,
    onActive: index => {
      scrollTo(index);
    }
  }), React.createElement("div", {
    className: `${classPrefix}-body`,
    ref: bodyRef,
    onScroll: checkActiveIndex
  }, panels)));
});