# Selector 选择组


在一组选项中选择一个或多个。

## 何时使用

提供多个选项供用户选择，一般在筛选和表单中使用。

## 示例

<code src="./demos/demo1.tsx"></code>

<!--<code src="./demos/demo2.tsx"></code>-->

## Selector

### 属性

| 属性          | 说明             | 类型                                                                    | 默认值  |
| ------------- | ---------------- | ----------------------------------------------------------------------- | ------- |
| icon          | 右下角图标       | `ReactNode`                                                             | `-`     |
| multiple      | 是否允许多选     | `boolean`                                                               | `false` |
| onChange      | 选项改变时触发   | `(value: SelectorValue[], extend: { items: SelectorOption[] }) => void` | -       |
| options       | 可选项           | `SelectorOption[]`                                                      | -       |
| showCheckMark | 是否显示对勾角标 | `boolean`                                                               | `true`  |
| value         | 选中项           | `SelectorValue[]`                                                       | -       |

### SelectorOption

| 属性  | 说明     | 类型            | 默认值 |
| ----- | -------- | --------------- | ------ |
| label | 文字     | `ReactNode`     | -      |
| value | 选项的值 | `SelectorValue` | -      |

```

```
