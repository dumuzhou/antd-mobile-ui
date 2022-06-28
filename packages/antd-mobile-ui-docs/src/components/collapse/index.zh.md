# Collapse 折叠面板

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Collapse

### 属性

| 属性             | 说明                                                                      | 类型                                                                                                   | 默认值  |
| ---------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| defaultActiveKey | 默认展开面板的 `key`                                                      | 手风琴模式：`string \| null` <br/>非手风琴模式：`string[]`                                             | -       |
| activeKey        | 当前展开面板的 `key`                                                      | 手风琴模式：`string \| null` <br/>非手风琴模式：`string[]`                                             | -       |
| accordion        | 是否开启手风琴模式                                                        | `boolean`                                                                                              | `false` |
| onChange         | 切换面板时触发                                                            | 手风琴模式：`(activeKey: string \| null) => void` <br /> 非手风琴模式：`(activeKey: string[]) => void` | -       |
| arrow            | 自定义箭头，如果是 ReactNode，那么 antd-mobile 会自动为你增加旋转动画效果 | `ReactNode \| ((active: boolean) => React.ReactNode)`                                                  | -       |

## Collapse.Panel

### 属性

| 属性           | 说明                        | 类型                                                     | 默认值  |
| -------------- | --------------------------- | -------------------------------------------------------- | ------- |
| key            | 唯一标识符                  | `string`                                                 | -       |
| title          | 标题栏左侧内容              | `ReactNode`                                              | -       |
| disabled       | 是否为禁用状态              | `boolean`                                                | `false` |
| forceRender    | 被隐藏时是否渲染 `DOM` 结构 | `boolean`                                                | `false` |
| destroyOnClose | 不可见时卸载内容            | `boolean`                                                | `false` |
| onClick        | 标题栏的点击事件            | `(event: React.MouseEvent<Element, MouseEvent>) => void` | -       |
| arrow          | 自定义箭头                  | `ReactNode \| ((active: boolean) => React.ReactNode)`    | -       |
