# Collapse 折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- 手风琴是一种特殊的折叠面板，只允许单个内容区域展开。

## 示例

<code src="./demos/demo1.tsx"></code>

<!--<code src="./demos/demo2.tsx"></code>-->

## Collapse

### 属性

| 属性        | 说明                                                                          | 类型                                                                                                   | 默认值  |
| ----------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| accordion   | 是否开启手风琴模式                                                            | `boolean`                                                                                              | `false` |
| activeKey   | 当前展开面板的 `key`                                                          | 手风琴模式：`string \| null` <br/>非手风琴模式：`string[]`                                             | -       |
| arrow       | 自定义箭头，如果是 ReactNode，那么 antd-mobile 会自动为你增加旋转动画效果     | `ReactNode \| ((active: boolean) => React.ReactNode)`                                                  | -       |
| selectArrow | 选中自定义箭头，如果是 ReactNode，那么 antd-mobile 会自动为你增加旋转动画效果 | `ReactNode \| ((active: boolean) => React.ReactNode)`                                                  | -       |
| onChange    | 切换面板时触发                                                                | 手风琴模式：`(activeKey: string \| null) => void` <br /> 非手风琴模式：`(activeKey: string[]) => void` | -       |

## Collapse.Panel

### 属性

| 属性  | 说明           | 类型        | 默认值 |
| ----- | -------------- | ----------- | ------ |
| key   | 唯一标识符     | `string`    | -      |
| title | 标题栏左侧内容 | `ReactNode` | -      |
