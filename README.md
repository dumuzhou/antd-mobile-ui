# 快速上手

[文档](https://antd-mobile-ui.setmp.com/zh)

antd-mobile-ui 是用 taro3 开发，兼容 rn、h5 和小程序的 ui

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
export { Button, Space } from "antd-mobile-ui";
```

components/antd-mobile-ui/index.rn.tsx

```javascript
export { Button, Space } from "antd-mobile-ui-rn";
```

## 使用

```javascript
import { Button, Space } from "components/antd-mobile-ui";
```
