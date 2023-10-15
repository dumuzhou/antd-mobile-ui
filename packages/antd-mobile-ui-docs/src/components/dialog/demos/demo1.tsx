import React, { useState } from 'react'
import { Button, Dialog, Space, Toast, Divider } from 'antd-mobile'
import { DemoBlock, DemoDescription, sleep } from 'demos'
import useHref from '../../../hooks/useHref'

export default () => {
  const [visible, setVisible] = useState(false)
  useHref()
  return (
    <>
      <DemoBlock title='单选'>
        <Button
          onClick={() => {
            setVisible(true)
          }}
        >
          最简单的小对话框
        </Button>
        <Dialog
          visible={visible}
          // @ts-ignore
          onMaskClick={() => {
            setVisible(false)
          }}
        >
          <div
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#fff',
            }}
          ></div>
        </Dialog>
      </DemoBlock>
    </>
  )
}
