# Ellipsis 文本省略 <Experimental></Experimental>

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性                            | 说明                                 | 类型                            | 默认值  |
| ------------------------------- | ------------------------------------ | ------------------------------- | ------- |
| content                         | 文本内容                             | `string`                        | -       |
| direction                       | 省略位置                             | `'start' \| 'end' \| 'middle'`  | `'end'` |
| rows                            | 展示几行                             | `number`                        | `1`     |
| expandText                      | 展开操作的文案                       | `string`                        | `''`    |
| collapseText                    | 收起操作的文案                       | `string`                        | `''`    |
| stopPropagationForActionButtons | 阻止展开操作，收起操作引发的事件冒泡 | `PropagationEvent[]`            | `[]`    |
| onContentClick                  | 点击文本内容时触发                   | `(e: React.MouseEvent) => void` | -       |
