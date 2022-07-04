import { __awaiter } from "tslib";
import { mergeProps } from '../../utils/with-default-props';
import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { getScrollParent } from '../../utils/get-scroll-parent';
import React, { useEffect, useRef, useState } from 'react';
import { supportsPassive } from '../../utils/supports-passive';
import { convertPx } from '../../utils/convert-px';
import { rubberbandIfOutOfBounds } from '../../utils/rubberband';
import { useConfig } from '../config-provider';
import { sleep } from '../../utils/sleep';
const classPrefix = `adm-pull-to-refresh`;
export const defaultProps = {
  pullingText: '下拉刷新',
  canReleaseText: '释放立即刷新',
  refreshingText: '加载中...',
  completeText: '刷新成功',
  completeDelay: 500,
  disabled: false,
  onRefresh: () => {}
};
export const PullToRefresh = p => {
  var _a, _b;

  const {
    locale
  } = useConfig();
  const props = mergeProps(defaultProps, {
    refreshingText: `${locale.common.loading}...`,
    pullingText: locale.PullToRefresh.pulling,
    canReleaseText: locale.PullToRefresh.canRelease,
    completeText: locale.PullToRefresh.complete
  }, p);
  const headHeight = (_a = props.headHeight) !== null && _a !== void 0 ? _a : convertPx(40);
  const threshold = (_b = props.threshold) !== null && _b !== void 0 ? _b : convertPx(60);
  const [status, setStatus] = useState('pulling');
  const [springStyles, api] = useSpring(() => ({
    from: {
      height: 0
    },
    config: {
      tension: 300,
      friction: 30,
      clamp: true
    }
  }));
  const elementRef = useRef(null);
  const pullingRef = useRef(false); //防止下拉时抖动

  useEffect(() => {
    var _a;

    (_a = elementRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('touchmove', () => {});
  }, []);

  function doRefresh() {
    return __awaiter(this, void 0, void 0, function* () {
      api.start({
        height: headHeight
      });
      setStatus('refreshing');

      try {
        yield props.onRefresh();
        setStatus('complete');
      } catch (e) {
        api.start({
          to: next => __awaiter(this, void 0, void 0, function* () {
            yield next({
              height: 0
            });
            setStatus('pulling');
          })
        });
        throw e;
      }

      if (props.completeDelay > 0) {
        yield sleep(props.completeDelay);
      }

      api.start({
        to: next => __awaiter(this, void 0, void 0, function* () {
          yield next({
            height: 0
          });
          setStatus('pulling');
        })
      });
    });
  }

  useDrag(state => {
    if (status === 'refreshing' || status === 'complete') return;
    const {
      event
    } = state;

    if (state.last) {
      pullingRef.current = false;

      if (status === 'canRelease') {
        doRefresh();
      } else {
        api.start({
          height: 0
        });
      }

      return;
    }

    const [, y] = state.movement;

    if (state.first && y > 0) {
      const target = state.event.target;
      if (!target || !(target instanceof Element)) return;
      let scrollParent = getScrollParent(target);

      while (true) {
        if (!scrollParent) return;
        const scrollTop = getScrollTop(scrollParent);

        if (scrollTop > 0) {
          return;
        }

        if (scrollParent instanceof Window) {
          break;
        }

        scrollParent = getScrollParent(scrollParent.parentNode);
      }

      pullingRef.current = true;

      function getScrollTop(element) {
        return 'scrollTop' in element ? element.scrollTop : element.scrollY;
      }
    }

    if (!pullingRef.current) return;

    if (event.cancelable) {
      event.preventDefault();
    }

    event.stopPropagation();
    const height = Math.max(rubberbandIfOutOfBounds(y, 0, 0, headHeight * 5, 0.5), 0);
    api.start({
      height
    });
    setStatus(height > threshold ? 'canRelease' : 'pulling');
  }, {
    pointer: {
      touch: true
    },
    axis: 'y',
    target: elementRef,
    enabled: !props.disabled,
    eventOptions: supportsPassive ? {
      passive: false
    } : false
  });

  const renderStatusText = () => {
    var _a;

    if (props.renderText) {
      return (_a = props.renderText) === null || _a === void 0 ? void 0 : _a.call(props, status);
    }

    if (status === 'pulling') return props.pullingText;
    if (status === 'canRelease') return props.canReleaseText;
    if (status === 'refreshing') return props.refreshingText;
    if (status === 'complete') return props.completeText;
  };

  return React.createElement(animated.div, {
    ref: elementRef,
    className: classPrefix
  }, React.createElement(animated.div, {
    style: springStyles,
    className: `${classPrefix}-head`
  }, React.createElement("div", {
    className: `${classPrefix}-head-content`,
    style: {
      height: headHeight
    }
  }, renderStatusText())), React.createElement("div", {
    className: `${classPrefix}-content`
  }, props.children));
};