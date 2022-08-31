import React from 'react'

// 忽略，使用时引入antd-mobile-ui即可
import { Tabs } from 'antd-mobile'
import { DemoBlock } from 'demos'
import useHref from '../../../hooks/useHref'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <Tabs>
          <Tabs.Tab title='水果' key='fruits'>
            菠萝
          </Tabs.Tab>
          <Tabs.Tab title='蔬菜' key='vegetables'>
            西红柿
          </Tabs.Tab>
          <Tabs.Tab title='动物' key='animals'>
            蚂蚁
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title='没有内容区' padding='0'>
        <Tabs>
          <Tabs.Tab title='水果' key='fruits' />
          <Tabs.Tab title='蔬菜' key='vegetables' />
          <Tabs.Tab title='动物' key='animals' />
        </Tabs>
      </DemoBlock>
    </>
  )
}
