import React from 'react'
// 忽略，使用时引入antd-mobile-ui即可
import { Rate, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { SmileOutline } from 'antd-mobile-icons'
import useHref from '../../../hooks/useHref'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='基础用法'>
        <Rate />
      </DemoBlock>

      <DemoBlock title='半星'>
        <Rate allowHalf defaultValue={2.5} />
      </DemoBlock>

      <DemoBlock title='只读'>
        <Rate readOnly value={4} />
      </DemoBlock>

      <DemoBlock title='清除'>
        <Space direction='vertical'>
          <Space align='center'>
            <Rate defaultValue={3} allowClear={true} />
            <div>可清除</div>
          </Space>
          <Space align='center'>
            <Rate defaultValue={3} allowClear={false} />
            <div>不可清除</div>
          </Space>
        </Space>
      </DemoBlock>
    </>
  )
}
