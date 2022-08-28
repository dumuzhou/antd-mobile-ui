import React from 'react'
// 忽略，使用时引入antd-mobile-ui即可
import { ErrorBlock, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import useHref from '../../../hooks/useHref'

import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <ErrorBlock
          image={<CloseOutline />}
          title='页面遇到一些小问题'
          description='待会来试试'
        />
      </DemoBlock>
    </>
  )
}
