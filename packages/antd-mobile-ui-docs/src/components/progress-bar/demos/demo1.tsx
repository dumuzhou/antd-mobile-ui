import React, { useState } from 'react'
// 忽略，使用时引入antd-mobile-ui即可
import { Button, ProgressBar, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import useHref from '../../../hooks/useHref'

export default () => {
  useHref()
  const [percent, setPercent] = useState<number>(20)
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space direction='vertical' block>
          <Space block>
            <Button
              color='primary'
              disabled={percent === 100}
              onClick={() => {
                setPercent(pre => pre + 10)
              }}
            >
              进度+10
            </Button>
            <Button
              color='primary'
              fill='outline'
              onClick={() => {
                setPercent(0)
              }}
            >
              重置
            </Button>
          </Space>
          <ProgressBar percent={percent} />
        </Space>
      </DemoBlock>

      <DemoBlock title='显示进度文字'>
        <Space direction='vertical' block>
          <ProgressBar percent={50} text='50%' />
        </Space>
      </DemoBlock>
      <DemoBlock title='直角的进度条'>
        <ProgressBar percent={50} rounded={false} />
      </DemoBlock>
    </>
  )
}
