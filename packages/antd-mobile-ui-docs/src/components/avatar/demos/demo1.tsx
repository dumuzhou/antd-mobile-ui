import { DemoBlock, DemoDescription } from 'demos'
import React from 'react'
import { Avatar, List, Space } from 'antd-mobile'
import useHref from '../../../hooks/useHref'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space block wrap>
          <Avatar src={demoAvatarImages[0]} />
          <Avatar src={demoAvatarImages[1]} />
          <Avatar src={demoAvatarImages[2]} />
          <Avatar src={demoAvatarImages[3]} />
        </Space>
      </DemoBlock>

      <DemoBlock title='占位头像'>
        <Space block direction='vertical'>
          <Avatar src='' />
        </Space>
      </DemoBlock>
    </>
  )
}

const demoAvatarImages = [
  'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
]
