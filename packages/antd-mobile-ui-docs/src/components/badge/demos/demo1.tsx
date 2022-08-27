import React from 'react'
// 忽略，使用时引入antd-mobile-ui即可
import { Badge, Space, Button } from 'antd-mobile'
import { DemoBlock } from 'demos'
import useHref from '../../../hooks/useHref'

import styles from './demo1.less'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space direction='vertical'>
          <Badge content='99+'>
            <Button color='primary' fill='solid'>
              Solid
            </Button>
          </Badge>
          <Badge content='新'>
            <Button color='primary' fill='solid'>
              Solid
            </Button>
          </Badge>

          <Badge content={Badge.dot}>
            <Button color='primary' fill='solid'>
              Solid
            </Button>
          </Badge>
        </Space>
      </DemoBlock>

      <DemoBlock title='独立使用'>
        <Space direction='vertical'>
          <Badge content='99+'></Badge>
          <Badge content='新消息来了!'></Badge>
        </Space>
      </DemoBlock>
    </>
  )
}
