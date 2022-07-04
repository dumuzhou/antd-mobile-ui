# Calendar <Experimental></Experimental>

Used to select a date or date range.

## When to Use

When the user needs to enter a date, he can select it in the pop-up date panel.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

## Calendar

### Props

| Name              | Description                                                                     | Type                                                                                                                                 | Default    |
| ----------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| allowClear        | Whether to allow clearing after another click.                                  | `boolean`                                                                                                                            | `true`     |
| defaultValue      | The default selected date or date range.                                        | Same as `value` prop.                                                                                                                | -          |
| max               | The maximum value of a selectable range.                                        | `Date`                                                                                                                               | -          |
| min               | Minimum value of selectable range.                                              | `Date`                                                                                                                               | -          |
| nextMonthButton   | Contents of the Next Month button on the navigation pane                        | `React.ReactNode`                                                                                                                    | `>`        |
| nextYearButton    | Contents of the next Year button on the navigation pane                         | `React.ReactNode`                                                                                                                    | `>>`       |
| onChange          | Trigger when selected date changes.                                             | `(val: Date \| null) => void` when selection mode is "single". `(val: [Date, Date] \| null) => void` when selection mode is "range". | -          |
| onPageChange      | Trigger when changed year or month.                                             | `(year: number, month: number) => void`                                                                                              | -          |
| prevMonthButton   | Contents of the Last Month button on the navigation pane                        | `React.ReactNode`                                                                                                                    | `<`        |
| prevYearButton    | Contents of the Last year button on the navigation pane                         | `React.ReactNode`                                                                                                                    | `<<`       |
| renderLabel       | The label render function.                                                      | `(date: Date) => string \| null \| undefined`                                                                                        | -          |
| selectionMode     | The selection mode. Disable selection when this prop is not set.                | `'single' \| 'range'`                                                                                                                | -          |
| shouldDisableDate | Set whether the date is disable selection. The min and max Settings are ignored | `(date: Date) => boolean`                                                                                                            | -          |
| value             | The selected date or date range.                                                | `Date \| null` when selection mode is "single". `[Date, Date] \| null` when selection mode is "range"                                | -          |
| weekStartsOn      | Week starts on which day.                                                       | `'Monday' \| 'Sunday'`                                                                                                               | `'Sunday'` |

### CSS Variables

Not supported yet.

### Ref

| Name        | Description            | Type                                             |
| ----------- | ---------------------- | ------------------------------------------------ |
| jumpTo      | Jump to specified page | `(page: Page \| ((page: Page) => Page)) => void` |
| jumpToToday | Jump to today's page   | `() => void`                                     |

```ts
type Page = { month: number; year: number }
```

You can manually control the page turning of the calendar through Ref, for example:

```ts
// Jump to today's page
ref.current.jumpToToday()

// Jump to the specified year and month
ref.current.jumpTo({ year: 2021, month: 1 })

// Jump to three years later
ref.current.jumpTo(page => ({
  year: page.year + 3,
  month: page.month,
}))
```
