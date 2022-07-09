import { useEffect } from 'react'
export default function () {
  useEffect(() => {
    let href = document.location.href
    console.log(document.location.href)
    // http://localhost:8000/~demos/button-demo1
    // http://192.168.0.166:10086/#/~demos/button-demo1

    // https://antd-mobile-ui.setmp.com/~demos/button-demo1
    // https://antd-mobile-ui.setmp.com/#/~demos/button-demo1
    let rst = href
      .replace('http://localhost:8000/', 'http://192.168.0.166:10086/#/')
      .replace(
        'https://antd-mobile-ui.setmp.com',
        'https://antd-mobile-ui.setmp.com/#/'
      )
    //if (href.indexOf('8000') > -1) {
    //switch (href) {
    //case 'http://localhost:8000/~demos/button-demo1':
    //rst = 'http://192.168.0.166:10086/#/demos/button/index'
    //}
    //}
    if (rst) {
      document.location.href = rst
    }
  }, [])
}
