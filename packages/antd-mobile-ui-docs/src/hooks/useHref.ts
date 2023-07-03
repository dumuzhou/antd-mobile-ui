import { useEffect } from 'react'
export default function () {
  useEffect(() => {
    let href = document.location.href
    let el = window.parent.document.getElementsByClassName(
      '__dumi-default-navbar-tool'
    )
    if (el.length && el[0]) {
      // @ts-ignore
      el[0].style.display = 'none'
    }

    // http://localhost:8000/~demos/button-demo1
    // http://192.168.0.166:10086/#/~demos/button-demo1

    // https://antd-mobile-ui.setmp.com/~demos/button-demo2
    // https://www.setmp.com/#/~demos/button-demo1
    let rst = href
      .replace('http://localhost:8000/', 'http://192.168.0.188:10086/#/')
      .replace(
        'https://antd-mobile-ui.setmp.com/',
        'https://antd-mobile-ui.setmp.com/demos/#/'
      ).replace(
        'https://dumuzhou.github.io/',
        'https://dumuzhou.github.io/demos/#/'
      )
      .replace('~', '')
    if (href.indexOf('https') > -1) {
      rst = rst + 'index'
    } else {
      rst = rst + '/index'
    }
    if (rst) {
      document.location.href = rst
    }
  }, [])
}
