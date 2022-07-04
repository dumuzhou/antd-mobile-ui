import React, { forwardRef, useState, useImperativeHandle, useMemo } from 'react';
import { withNativeProps } from '../../utils/native-props';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { mergeProps } from '../../utils/with-default-props';
import { ArrowLeft } from './arrow-left';
import { ArrowLeftDouble } from './arrow-left-double';
import { useConfig } from '../config-provider';
import isoWeek from 'dayjs/plugin/isoWeek';
import { useUpdateEffect } from 'ahooks';
import { usePropsValue } from '../../utils/use-props-value';
import { convertValueToRange } from './convert';
dayjs.extend(isoWeek);
const classPrefix = 'adm-calendar';
const defaultProps = {
  weekStartsOn: 'Sunday',
  defaultValue: null,
  allowClear: true,
  prevMonthButton: React.createElement(ArrowLeft, null),
  prevYearButton: React.createElement(ArrowLeftDouble, null),
  nextMonthButton: React.createElement(ArrowLeft, null),
  nextYearButton: React.createElement(ArrowLeftDouble, null)
};
export const Calendar = forwardRef((p, ref) => {
  const today = dayjs();
  const props = mergeProps(defaultProps, p);
  const {
    locale
  } = useConfig();
  const markItems = [...locale.Calendar.markItems];

  if (props.weekStartsOn === 'Sunday') {
    const item = markItems.pop();
    if (item) markItems.unshift(item);
  }

  const [dateRange, setDateRange] = usePropsValue({
    value: props.value === undefined ? undefined : convertValueToRange(props.selectionMode, props.value),
    defaultValue: convertValueToRange(props.selectionMode, props.defaultValue),
    onChange: v => {
      var _a, _b;

      if (props.selectionMode === 'single') {
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, v ? v[0] : null);
      } else if (props.selectionMode === 'range') {
        (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, v);
      }
    }
  });
  const [intermediate, setIntermediate] = useState(false);
  const [current, setCurrent] = useState(() => dayjs(dateRange ? dateRange[0] : today).date(1));
  useUpdateEffect(() => {
    var _a;

    (_a = props.onPageChange) === null || _a === void 0 ? void 0 : _a.call(props, current.year(), current.month() + 1);
  }, [current]);
  useImperativeHandle(ref, () => ({
    jumpTo: pageOrPageGenerator => {
      let page;

      if (typeof pageOrPageGenerator === 'function') {
        page = pageOrPageGenerator({
          year: current.year(),
          month: current.month() + 1
        });
      } else {
        page = pageOrPageGenerator;
      }

      setCurrent(dayjs().year(page.year).month(page.month - 1).date(1));
    },
    jumpToToday: () => {
      setCurrent(dayjs().date(1));
    }
  }));
  const header = React.createElement("div", {
    className: `${classPrefix}-header`
  }, React.createElement("a", {
    className: `${classPrefix}-arrow-button ${classPrefix}-arrow-button-year`,
    onClick: () => {
      setCurrent(current.subtract(1, 'year'));
    }
  }, props.prevYearButton), React.createElement("a", {
    className: `${classPrefix}-arrow-button ${classPrefix}-arrow-button-month`,
    onClick: () => {
      setCurrent(current.subtract(1, 'month'));
    }
  }, props.prevMonthButton), React.createElement("div", {
    className: `${classPrefix}-title`
  }, locale.Calendar.renderYearAndMonth(current.year(), current.month() + 1)), React.createElement("a", {
    className: classNames(`${classPrefix}-arrow-button`, `${classPrefix}-arrow-button-right`, `${classPrefix}-arrow-button-right-month`),
    onClick: () => {
      setCurrent(current.add(1, 'month'));
    }
  }, props.nextMonthButton), React.createElement("a", {
    className: classNames(`${classPrefix}-arrow-button`, `${classPrefix}-arrow-button-right`, `${classPrefix}-arrow-button-right-year`),
    onClick: () => {
      setCurrent(current.add(1, 'year'));
    }
  }, props.nextYearButton));
  const maxDay = useMemo(() => props.max && dayjs(props.max), [props.max]);
  const minDay = useMemo(() => props.min && dayjs(props.min), [props.min]);

  function renderCells() {
    var _a;

    const cells = [];
    let iterator = current.subtract(current.isoWeekday(), 'day');

    if (props.weekStartsOn === 'Monday') {
      iterator = iterator.add(1, 'day');
    }

    while (cells.length < 6 * 7) {
      const d = iterator;
      let isSelect = false;
      let isBegin = false;
      let isEnd = false;

      if (dateRange) {
        const [begin, end] = dateRange;
        isBegin = d.isSame(begin, 'day');
        isEnd = d.isSame(end, 'day');
        isSelect = isBegin || isEnd || d.isAfter(begin, 'day') && d.isBefore(end, 'day');
      }

      const inThisMonth = d.month() === current.month();
      const disabled = props.shouldDisableDate ? props.shouldDisableDate(d.toDate()) : maxDay && d.isAfter(maxDay, 'day') || minDay && d.isBefore(minDay, 'day');
      cells.push(React.createElement("div", {
        key: d.valueOf(),
        className: classNames(`${classPrefix}-cell`, (disabled || !inThisMonth) && `${classPrefix}-cell-disabled`, inThisMonth && {
          [`${classPrefix}-cell-today`]: d.isSame(today, 'day'),
          [`${classPrefix}-cell-selected`]: isSelect,
          [`${classPrefix}-cell-selected-begin`]: isBegin,
          [`${classPrefix}-cell-selected-end`]: isEnd
        }),
        onClick: () => {
          if (!props.selectionMode) return;
          if (disabled) return;
          const date = d.toDate();

          if (!inThisMonth) {
            setCurrent(d.clone().date(1));
          }

          function shouldClear() {
            if (!props.allowClear) return false;
            if (!dateRange) return false;
            const [begin, end] = dateRange;
            return d.isSame(begin, 'date') && d.isSame(end, 'day');
          }

          if (props.selectionMode === 'single') {
            if (props.allowClear && shouldClear()) {
              setDateRange(null);
              return;
            }

            setDateRange([date, date]);
          } else if (props.selectionMode === 'range') {
            if (!dateRange) {
              setDateRange([date, date]);
              setIntermediate(true);
              return;
            }

            if (shouldClear()) {
              setDateRange(null);
              setIntermediate(false);
              return;
            }

            if (intermediate) {
              const another = dateRange[0];
              setDateRange(another > date ? [date, another] : [another, date]);
              setIntermediate(false);
            } else {
              setDateRange([date, date]);
              setIntermediate(true);
            }
          }
        }
      }, React.createElement("div", {
        className: `${classPrefix}-cell-top`
      }, d.date()), React.createElement("div", {
        className: `${classPrefix}-cell-bottom`
      }, (_a = props.renderLabel) === null || _a === void 0 ? void 0 : _a.call(props, d.toDate()))));
      iterator = iterator.add(1, 'day');
    }

    return cells;
  }

  const body = React.createElement("div", {
    className: `${classPrefix}-cells`
  }, renderCells());
  const mark = React.createElement("div", {
    className: `${classPrefix}-mark`
  }, markItems.map((item, index) => React.createElement("div", {
    key: index,
    className: `${classPrefix}-mark-cell`
  }, item)));
  return withNativeProps(props, React.createElement("div", {
    className: classPrefix
  }, header, mark, body));
});