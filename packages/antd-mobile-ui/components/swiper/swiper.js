import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { withNativeProps } from '../../utils/native-props';
import { mergeProps } from '../../utils/with-default-props';
import classNames from 'classnames';
import { SwiperItem } from './swiper-item';
import { devWarning } from '../../utils/dev-log';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import PageIndicator from '../page-indicator';
import { staged } from 'staged-components';
import { useRefState } from '../../utils/use-ref-state';
import { bound } from '../../utils/bound';
import { useIsomorphicLayoutEffect, useUpdateEffect } from 'ahooks';
const classPrefix = `adm-swiper`;
const defaultProps = {
  defaultIndex: 0,
  allowTouchMove: true,
  autoplay: false,
  autoplayInterval: 3000,
  loop: false,
  direction: 'horizontal',
  slideSize: 100,
  trackOffset: 0,
  stuckAtBoundary: true,
  rubberband: true
};
export const Swiper = forwardRef(staged((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const isVertical = props.direction === 'vertical';
  const slideRatio = props.slideSize / 100;
  const offsetRatio = props.trackOffset / 100;
  const {
    validChildren,
    count
  } = useMemo(() => {
    let count = 0;
    const validChildren = React.Children.map(props.children, child => {
      if (!React.isValidElement(child)) return null;

      if (child.type !== SwiperItem) {
        devWarning('Swiper', 'The children of `Swiper` must be `Swiper.Item` components.');
        return null;
      }

      count++;
      return child;
    });
    return {
      validChildren,
      count
    };
  }, [props.children]);

  if (count === 0 || !validChildren) {
    devWarning('Swiper', '`Swiper` needs at least one child.');
    return null;
  }

  return () => {
    let loop = props.loop;

    if (slideRatio * (count - 1) < 1) {
      loop = false;
    }

    const trackRef = useRef(null);

    function getSlidePixels() {
      const track = trackRef.current;
      if (!track) return 0;
      const trackPixels = isVertical ? track.offsetHeight : track.offsetWidth;
      return trackPixels * props.slideSize / 100;
    }

    const [current, setCurrent] = useState(props.defaultIndex);
    useUpdateEffect(() => {
      var _a;

      (_a = props.onIndexChange) === null || _a === void 0 ? void 0 : _a.call(props, current);
    }, [current]);
    const [dragging, setDragging, draggingRef] = useRefState(false);

    function boundIndex(current) {
      let min = 0;
      let max = count - 1;

      if (props.stuckAtBoundary) {
        min += offsetRatio / slideRatio;
        max -= (1 - slideRatio - offsetRatio) / slideRatio;
      }

      return bound(current, min, max);
    }

    const [{
      position
    }, api] = useSpring(() => ({
      position: boundIndex(current) * 100,
      config: {
        tension: 200,
        friction: 30
      },
      onRest: () => {
        if (draggingRef.current) return;
        if (!loop) return;
        const rawX = position.get();
        const totalWidth = 100 * count;
        const standardPosition = modulus(rawX, totalWidth);
        if (standardPosition === rawX) return;
        api.start({
          position: standardPosition,
          immediate: true
        });
      }
    }), [count]);
    const bind = useDrag(state => {
      const slidePixels = getSlidePixels();
      if (!slidePixels) return;
      const paramIndex = isVertical ? 1 : 0;
      const offset = state.offset[paramIndex];
      const direction = state.direction[paramIndex];
      const velocity = state.velocity[paramIndex];
      setDragging(true);

      if (!state.last) {
        api.start({
          position: offset * 100 / slidePixels,
          immediate: true
        });
      } else {
        const minIndex = Math.floor(offset / slidePixels);
        const maxIndex = minIndex + 1;
        const index = Math.round((offset + velocity * 2000 * direction) / slidePixels);
        swipeTo(bound(index, minIndex, maxIndex));
        window.setTimeout(() => {
          setDragging(false);
        });
      }
    }, {
      transform: ([x, y]) => [-x, -y],
      from: () => {
        const slidePixels = getSlidePixels();
        return [position.get() / 100 * slidePixels, position.get() / 100 * slidePixels];
      },
      bounds: () => {
        if (loop) return {};
        const slidePixels = getSlidePixels();
        const lowerBound = boundIndex(0) * slidePixels;
        const upperBound = boundIndex(count - 1) * slidePixels;
        return isVertical ? {
          top: lowerBound,
          bottom: upperBound
        } : {
          left: lowerBound,
          right: upperBound
        };
      },
      rubberband: props.rubberband,
      axis: isVertical ? 'y' : 'x',
      preventScroll: !isVertical,
      pointer: {
        touch: true
      }
    });

    function swipeTo(index, immediate = false) {
      const roundedIndex = Math.round(index);
      const targetIndex = loop ? modulus(roundedIndex, count) : bound(roundedIndex, 0, count - 1);
      setCurrent(targetIndex);
      api.start({
        position: (loop ? roundedIndex : boundIndex(roundedIndex)) * 100,
        immediate
      });
    }

    function swipeNext() {
      swipeTo(Math.round(position.get() / 100) + 1);
    }

    function swipePrev() {
      swipeTo(Math.round(position.get() / 100) - 1);
    }

    useImperativeHandle(ref, () => ({
      swipeTo,
      swipeNext,
      swipePrev
    }));
    useIsomorphicLayoutEffect(() => {
      const maxIndex = validChildren.length - 1;

      if (current > maxIndex) {
        swipeTo(maxIndex, true);
      }
    });
    const {
      autoplay,
      autoplayInterval
    } = props;
    useEffect(() => {
      if (!autoplay || dragging) return;
      const interval = window.setInterval(() => {
        swipeNext();
      }, autoplayInterval);
      return () => {
        window.clearInterval(interval);
      };
    }, [autoplay, autoplayInterval, dragging]);

    function renderTrackInner() {
      if (loop) {
        return React.createElement("div", {
          className: `${classPrefix}-track-inner`
        }, React.Children.map(validChildren, (child, index) => {
          return React.createElement(animated.div, {
            className: `${classPrefix}-slide`,
            style: {
              [isVertical ? 'y' : 'x']: position.to(position => {
                let finalPosition = -position + index * 100;
                const totalWidth = count * 100;
                const flagWidth = totalWidth / 2;
                finalPosition = modulus(finalPosition + flagWidth, totalWidth) - flagWidth;
                return `${finalPosition}%`;
              }),
              [isVertical ? 'top' : 'left']: `-${index * 100}%`
            }
          }, child);
        }));
      } else {
        return React.createElement(animated.div, {
          className: `${classPrefix}-track-inner`,
          style: {
            [isVertical ? 'y' : 'x']: position.to(position => `${-position}%`)
          }
        }, React.Children.map(validChildren, child => {
          return React.createElement("div", {
            className: `${classPrefix}-slide`
          }, child);
        }));
      }
    }

    const style = {
      '--slide-size': `${props.slideSize}%`,
      '--track-offset': `${props.trackOffset}%`
    };
    return withNativeProps(props, React.createElement("div", {
      className: classNames(classPrefix, `${classPrefix}-${props.direction}`),
      style: style
    }, React.createElement("div", Object.assign({
      ref: trackRef,
      className: classNames(`${classPrefix}-track`, {
        [`${classPrefix}-track-allow-touch-move`]: props.allowTouchMove
      }),
      onClickCapture: e => {
        if (draggingRef.current) {
          e.stopPropagation();
        }
      }
    }, props.allowTouchMove ? bind() : {}), renderTrackInner()), props.indicator === undefined ? React.createElement("div", {
      className: `${classPrefix}-indicator`
    }, React.createElement(PageIndicator, Object.assign({}, props.indicatorProps, {
      total: count,
      current: current,
      direction: props.direction
    }))) : props.indicator(count, current)));
  };
}));

function modulus(value, division) {
  const remainder = value % division;
  return remainder < 0 ? remainder + division : remainder;
}