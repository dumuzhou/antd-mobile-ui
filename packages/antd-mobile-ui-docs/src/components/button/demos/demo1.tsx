import React from 'react'
// 忽略，使用时引入antd-mobile-ui即可
import { Button, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import useHref from '../../../hooks/useHref'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='填充模式'>
        <Space>
          <Button
            color='primary'
            fill='solid'
            onClick={() => {
              console.log('点击事件')
            }}
          >
            Solid
          </Button>
          <Button color='success' fill='outline'>
            Outline
          </Button>
          <Button color='success' fill='none'>
            None
          </Button>
        </Space>
      </DemoBlock>
      <DemoBlock title='按钮尺寸'>
        <Space>
          <Button color='primary' size='mini'>
            Mini
          </Button>
          <Button color='primary' size='small'>
            Small
          </Button>
          <Button color='primary'>Middle</Button>
          <Button color='primary' size='large'>
            Large
          </Button>
        </Space>
      </DemoBlock>
      <DemoBlock title='语义按钮'>
        <Space wrap>
          <Button>Default</Button>
          <Button color='primary'>Primary</Button>
          <Button color='success'>success</Button>
          <Button color='warning'>warning</Button>
          <Button color='danger'>danger</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title='形状'>
        <Space wrap>
          <Button shape='default' color='primary'>
            Default Button
          </Button>
          <Button shape='rounded' color='primary'>
            Rounded Button
          </Button>
          <Button shape='rectangular' color='primary'>
            Rectangular Button
          </Button>
        </Space>
      </DemoBlock>
      <DemoBlock title='禁用状态'>
        <Space>
          <Button disabled>Default</Button>
          <Button shape='default' color='primary' disabled>
            Default Button
          </Button>
        </Space>
      </DemoBlock>
    </>
  )
}
