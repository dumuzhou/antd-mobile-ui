# Rate 评分

用图形表示评分等级程度。

## 何时使用

适用于展示事物评级以及快速打分。

## 示例

<code src="./demos/demo1.tsx"></code>

## Rate

### 属性

| 属性            | 说明                   | 类型                      | 默认值  |
| --------------- | ---------------------- | ------------------------- | ------- |
| allowClear      | 是否允许再次点击后清除 | `boolean`                 | `true`  |
| allowHalf       | 是否允许半选           | `boolean`                 | `false` |
| character       | 未选中图标             | `ReactNode`               | -       |
| characterSelect | 选中图标               | `ReactNode`               | -       |
| onChange        | 选择时的回调           | `(value: number) => void` | -       |
| readOnly        | 只读，无法进行交互     | `boolean`                 | `false` |
| value           | 当前数，受控值         | `number`                  | -       |

<!--### CSS 变量-->

<!--| 属性             | 说明       | 默认值                   |-->
<!--| ---------------- | ---------- | ------------------------ |-->
<!--| --active-color   | 填充色     | `#ffd21e`                |-->
<!--| --inactive-color | 原始填充色 | `var(--adm-color-light)` |-->
<!--| --star-size      | star 大小  | `24px`                   |-->
