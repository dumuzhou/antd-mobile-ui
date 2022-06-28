# SearchBar 搜索框

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性                   | 说明                                                                                                      | 类型                                                      | 默认值              |
| ---------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------- |
| value                  | 输入值                                                                                                    | `string`                                                  | -                   |
| placeholder            | 提示文本                                                                                                  | `string`                                                  | -                   |
| maxLength              | 输入的最大字符数                                                                                          | `number`                                                  | -                   |
| clearable              | 是否启用清除图标，点击清除图标后会清空输入框                                                              | `boolean`                                                 | `true`              |
| onlyShowClearWhenFocus | 如果 `true`，那么只有输入框聚焦时才会显示清除按钮；如果为 `false`，那么输入框失去焦点后依旧会显示清除按钮 | `boolean`                                                 | `false`             |
| showCancelButton       | 是否在搜索框右侧显示取消按钮                                                                              | `boolean \| ((focus: boolean, value: string) => boolean)` | `false`             |
| cancelText             | 取消按钮的文案                                                                                            | `string`                                                  | `'取消'`            |
| icon                   | 图标                                                                                                      | `ReactNode`                                               | `<SearchOutline />` |
| clearOnCancel          | 点击取消按钮后是否清空输入框                                                                              | `boolean`                                                 | `true`              |
| onSearch               | 输入框回车时触发                                                                                          | `(value: string) => void`                                 | -                   |
| onChange               | 输入框内容变化时触发                                                                                      | `(value: string) => void`                                 | -                   |
| onFocus                | 输入框获得焦点时触发                                                                                      | `(e: React.FocusEvent<HTMLInputElement>) => void`         | -                   |
| onBlur                 | 输入框失去焦点时触发                                                                                      | `(e: React.FocusEvent<HTMLInputElement>) => void`         | -                   |
| onClear                | 点击清除按钮后触发                                                                                        | `() => void`                                              | -                   |
| onCancel               | 点击取消按钮时触发                                                                                        | `() => void`                                              | -                   |

### CSS 变量

| 属性                | 说明                   | 默认值                  |
| ------------------- | ---------------------- | ----------------------- |
| --background        | 背景色                 | `#f5f5f5`               |
| --border-radius     | 圆角                   | `6px`                   |
| --placeholder-color | `placeholder` 文字颜色 | `var(--adm-color-weak)` |
| --height            | 高度                   | `32px`                  |
| --padding-left      | 搜索框的左侧 padding   | `8px`                   |

## Ref

同 [Input](./input)
