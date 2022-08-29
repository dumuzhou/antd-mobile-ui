import React from 'react'
// 忽略，使用时引入antd-mobile-ui即可
import { Selector, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { options } from './options'
import useHref from '../../../hooks/useHref'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='单选'>
        <Selector
          options={options}
          defaultValue={['1']}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </DemoBlock>

      <DemoBlock title='多选'>
        <Selector
          options={options}
          defaultValue={['2', '3']}
          multiple={true}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </DemoBlock>
      <DemoBlock title='不显示图标'>
        <Selector
          options={options}
          defaultValue={['1']}
          showCheckMark={false}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </DemoBlock>
    </>
  )
}
