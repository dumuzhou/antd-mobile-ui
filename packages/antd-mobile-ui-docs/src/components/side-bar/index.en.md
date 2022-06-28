# SideBar

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

<code src="./demos/demo4.tsx"></code>

### Props

### SideBar

| Name             | Description                                                                 | Type                    | Default                 |
| ---------------- | --------------------------------------------------------------------------- | ----------------------- | ----------------------- |
| activeKey        | `key` of currently active `item`                                            | `string \| null`        | -                       |
| defaultActiveKey | The initialized `key` of the selected `item`, if the `activeKey` is not set | `string \| null`        | `key` of the 1st `item` |
| onChange         | Callback when switching panel                                               | `(key: string) => void` | -                       |

### SideBar.Item

| Name     | Description                   | Type        | Default |
| -------- | ----------------------------- | ----------- | ------- |
| key      | Corresponding to `activeKey`  | `string`    | -       |
| title    | Title of the `item`           | `ReactNode` | -       |
| disabled | Should the `item` be disabled | `boolean`   | `false` |
| badge    | Badge of the `item`           | `ReactNode` | -       |

### CSS Variables

| Name                 | Description                                      | Default   |
| -------------------- | ------------------------------------------------ | --------- |
| --width              | the width of the SideBar                         | `96px`    |
| --height             | the height of the SideBar                        | `100%`    |
| --item-border-radius | the border-radius of the currently active `item` | `8px`     |
| --background-color   | Color of background                              | `#f5f5f5` |
