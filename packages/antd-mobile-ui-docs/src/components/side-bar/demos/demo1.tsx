import React from 'react'
// 忽略，使用时引入antd-mobile-ui即可
import { SideBar } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { tabs } from './tabs'
import useHref from '../../../hooks/useHref'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <SideBar>
          {tabs.map(item => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </DemoBlock>
    </>
  )
}
