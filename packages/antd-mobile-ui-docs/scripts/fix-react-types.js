/**
 * https://github.com/syanbo/react-native-syan-image-picker/issues/231
 */
const fs = require('fs')
const path = require('path')
const taroRouterRNDir = path.join(
  __dirname,
  '..',
  'node_modules',
  '@types/react'
)
const toPatchFiles = ['index.d.ts']

const taroRouterRNDirSrc = path.join(__dirname, '..', 'scripts')
//const toPatchFilesSrc = ['index.d.ts']

toPatchFiles.forEach(toPatchFile => {
  // 存储路径
  const toPatchFilePath = path.join(taroRouterRNDir, toPatchFile)

  // 存储内容
  const toPatchFilePathSrc = path.join(taroRouterRNDirSrc, toPatchFile)
  const fileContent = fs.readFileSync(toPatchFilePathSrc, 'utf8')

  fs.writeFileSync(toPatchFilePath, fileContent)
  console.log('fix @types/react  successfully: ', toPatchFilePath)
})
