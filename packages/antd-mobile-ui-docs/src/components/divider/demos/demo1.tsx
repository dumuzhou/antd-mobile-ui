import React from 'react'
// 忽略，使用时引入antd-mobile-ui即可
import { Divider, Button, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import useHref from '../../../hooks/useHref'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='基础分割线'>
        <Divider></Divider>
      </DemoBlock>
      <DemoBlock title='带内容的分割线'>
        <Divider>默认内容在中间</Divider>
      </DemoBlock>
      <DemoBlock title='竖向分割线'>
        <Space>
          <Button size='mini'>按钮</Button>
          <Divider direction='vertical'></Divider>
          <Button size='mini'>按钮</Button>
        </Space>
      </DemoBlock>
    </>
  )
}
