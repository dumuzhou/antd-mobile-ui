import React from 'react'
// 忽略，使用时引入antd-mobile-ui即可
import { Empty } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { QuestionCircleOutline } from 'antd-mobile-icons'
import useHref from '../../../hooks/useHref'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <Empty />
      </DemoBlock>

      <DemoBlock title='描述文字' padding='0'>
        <Empty description='暂无数据' />
      </DemoBlock>
    </>
  )
}
