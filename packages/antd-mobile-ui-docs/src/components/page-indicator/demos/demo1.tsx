import React from 'react'
import { PageIndicator } from 'antd-mobile'
import { DemoBlock } from 'demos'
import useHref from '../../../hooks/useHref'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='基础用法'>
        <PageIndicator total={4} current={0} />
      </DemoBlock>

      <DemoBlock title='白色' background='rgb(212 212 212)'>
        <PageIndicator total={4} current={0} color='white' />
      </DemoBlock>

      <DemoBlock title='竖直方向'>
        <PageIndicator total={4} current={0} direction='vertical' />
      </DemoBlock>
    </>
  )
}
