import React from 'react'
// 忽略，使用时引入antd-mobile-ui即可
import { Tag, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import useHref from '../../../hooks/useHref'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space>
          <Tag>123</Tag>
        </Space>
      </DemoBlock>
      <DemoBlock title='线框标签'>
        <Space>
          <Tag color='primary' fill='outline'>
            Primary
          </Tag>
          <Tag color='success' fill='outline'>
            success
          </Tag>
          <Tag color='danger' fill='outline'>
            danger
          </Tag>
        </Space>
      </DemoBlock>

      <DemoBlock title='语义标签'>
        <Space>
          <Tag color='default'>Default</Tag>
          <Tag color='primary'>测试</Tag>
          <Tag color='success'>success</Tag>
          <Tag color='warning'>warning</Tag>
          <Tag color='danger'>danger</Tag>
        </Space>
      </DemoBlock>
      <DemoBlock title='圆角标签'>
        <Space>
          <Tag round color='primary'>
            kongxin
          </Tag>
        </Space>
      </DemoBlock>
    </>
  )
}
