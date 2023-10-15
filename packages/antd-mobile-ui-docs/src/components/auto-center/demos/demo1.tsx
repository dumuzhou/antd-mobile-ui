import React from 'react'
import { AutoCenter } from 'antd-mobile'
import { DemoBlock, lorem } from 'demos'

const shortText = lorem.generateWords(3)
const longText = lorem.generateParagraphs(2)

export default () => {
  return (
    <>
      <DemoBlock title='内容不够整行宽度时自动居中'>
        <AutoCenter>mollit excepteur minim</AutoCenter>
      </DemoBlock>

      <DemoBlock title='内容达到满宽后保持正常的左对齐'>
        <AutoCenter>
          Quis minim do eu duis occaecat mollit eu ex qui cillum ad irure aute
          adipisicing officia. Est quis id sit non cillum pariatur irure
          pariatur commodo adipisicing id pariatur excepteur. Nisi exercitation
          nisi mollit labore ad minim occaecat dolor qui deserunt adipisicing
          ipsum. Id ex do ipsum ut consectetur quis consectetur. Eiusmod
          exercitation sit enim tempor magna incididunt consequat dolore enim
          qui. Incididunt voluptate irure quis. Dolor ullamco adipisicing id
          tempor ullamco est quis voluptate. Sunt proident et consequat dolor
          id. Commodo officia aliquip cillum duis amet aute aute nisi. Minim do
          magna anim labore incididunt occaecat proident sunt Lorem et. Aliqua
          deserunt dolore et qui dolor commodo duis nulla Lorem. Qui consequat
          ad enim occaecat mollit duis duis aute ad est nulla consequat esse
          tempor. Tempor ad non tempor ullamco est aute sint aliqua sint ullamco
          proident exercitation sunt.
        </AutoCenter>
      </DemoBlock>
    </>
  )
}
