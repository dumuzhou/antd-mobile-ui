import React from 'react'
// 忽略，使用时引入antd-mobile-ui即可
import { NavBar, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'
import useHref from '../../../hooks/useHref'

import './demo1.less'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <NavBar backArrow={<CloseOutline />}>
          标题标题标题标题标题标题标题标题标题标题
        </NavBar>
      </DemoBlock>
      <DemoBlock title='返回按钮显示文字' padding='0'>
        <NavBar backArrow={<CloseOutline />} back='返回'>
          标题标题标题标题标题标题标题标题标题标题
        </NavBar>
      </DemoBlock>

      <DemoBlock title='返回按钮不显示图标' padding='0'>
        <NavBar back='返回'>标题标题标题标题标题标题标题标题标题标题</NavBar>
      </DemoBlock>
    </>
  )
}
