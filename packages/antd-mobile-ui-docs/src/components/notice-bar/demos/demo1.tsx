import React from 'react'

// 忽略，使用时引入antd-mobile-ui即可
import { NoticeBar, Space } from 'antd-mobile'
import { DemoBlock, lorem } from 'demos'
import { CompassOutline, CloseCircleOutline } from 'antd-mobile-icons'
import useHref from '../../../hooks/useHref'

const demoLongText = lorem.generateWords(20)

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='通告栏语义' padding='0' background='transparent'>
        <Space block direction='vertical'>
          <NoticeBar content='默认' color='default' />
          <NoticeBar content='警告' color='alert' />
          <NoticeBar content='错误' color='error' />
          <NoticeBar content='信息' color='info' />
        </Space>
      </DemoBlock>
    </>
  )
}
