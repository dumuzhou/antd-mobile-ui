import React from 'react'
import { Skeleton } from 'antd-mobile'
import { DemoBlock } from 'demos'
import styles from './demo1.less'
import useHref from '../../../hooks/useHref'

export default () => {
  useHref()
  return (
    <>
      <DemoBlock title='基础用法'>
        <Skeleton.Title />
        <Skeleton.Paragraph lineCount={4} />
      </DemoBlock>
    </>
  )
}
