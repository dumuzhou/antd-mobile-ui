# 快速上手

## 安装

```bash
$ npm install --save antd-mobile-ui
$ npm install --save antd-mobile-ui-rn
# or
$ yarn add antd-mobile-ui
$ yarn add antd-mobile-ui-rn
```

## 配置

编辑 config/index.js h5 下增加配置

```javascript
esnextModules: ["antd-mobile-ui"],
```

## 引入

components/antd-mobile-ui/index.tsx

```javascript
export { Button, Space } from 'antd-mobile-ui'
```

components/antd-mobile-ui/index.rn.tsx

```javascript
export { Button, Space } from 'antd-mobile-ui-rn'
```

## 使用

```javascript
import { Button, Space } from 'components/antd-mobile-ui'
```

<!--## 在线体验-->

<!--如果你不想在本地配置环境，也可以直接在 [codesandbox](https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json) 或 [stackblitz](https://stackblitz.com/edit/antd-mobile?file=index.tsx) 上进行体验。-->
