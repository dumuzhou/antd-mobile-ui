import React, { useState } from 'react'

// 忽略，使用时引入antd-mobile-ui即可
import { Badge, TabBar } from 'antd-mobile'
import { DemoBlock } from 'demos'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import useHref from '../../../hooks/useHref'

export default () => {
  useHref()
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
      selectIcon: <AppOutline />,
    },
    {
      key: 'todo',
      title: '我的待办',
      icon: <UnorderedListOutline />,
      selectIcon: <UnorderedListOutline />,
    },
    {
      key: 'message',
      title: '我的消息',
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
      selectIcon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
    },
    {
      key: 'personalCenter',
      title: '个人中心',
      icon: <UserOutline />,
      selectIcon: <UserOutline />,
    },
  ]

  const [activeKey, setActiveKey] = useState('todo')

  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <TabBar>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </DemoBlock>

      <DemoBlock title='仅图标' padding='0'>
        <TabBar>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} />
          ))}
        </TabBar>
      </DemoBlock>

      <DemoBlock title='仅标题' padding='0'>
        <TabBar>
          {tabs.map(item => (
            <TabBar.Item key={item.key} title={item.title} />
          ))}
        </TabBar>
      </DemoBlock>
    </>
  )
}
