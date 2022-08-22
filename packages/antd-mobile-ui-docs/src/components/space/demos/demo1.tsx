import React from 'react'
// 忽略，使用时引入antd-mobile-ui即可
import { Space, Button } from 'antd-mobile'
import { DemoBlock } from 'demos'
import useHref from '../../../hooks/useHref'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='水平方向的间距'>
        <Space>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title='换行'>
        <Space wrap>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
          <Button>按钮4</Button>
          <Button>按钮5</Button>
          <Button>按钮6</Button>
          <Button>按钮7</Button>
          <Button>按钮8</Button>
          <Button>按钮9</Button>
          <Button>按钮10</Button>
          <Button>按钮11</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title='垂直方向的间距'>
        <Space direction='vertical'>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title='主轴对齐方式'>
        <Space justify='center'>
          <Button>按钮1</Button>
          <div>
            <Button>按钮2</Button>
            <Button>按钮3</Button>
          </div>
        </Space>
      </DemoBlock>
      <DemoBlock title='交叉轴对齐方式'>
        <Space align='end'>
          <Button>按钮1</Button>
          <div>
            <Button>按钮2</Button>
            <Button>按钮3</Button>
          </div>
        </Space>
      </DemoBlock>
    </>
  )
}
