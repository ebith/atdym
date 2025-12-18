import React from 'react'

const temportaryStyleFix = { gridAutoFlow: 'column', margin: '0 1rem' }
const Footer = (props) => {
  return (
    <>
      <div className="divider my-10"></div>
      <footer className="footer" style={temportaryStyleFix}>
        <div>
          <span className="footer-title">使い方</span>
          <a
            className="link link-hover"
            ref={(node) => {
              const user = document.location.href.match(
                /[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/
              )
              node &&
                node.setAttribute(
                  'href',
                  `javascript:(()=>{(async()=>{let e=new SpeechSynthesisUtterance;e.lang="ja-JP",(await fetch("https://atdym.feelmy.net/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:"${user[0]}",url:document.location.href,title:document.title||document.location.href})})).status===200?(e.text="後で読むに追加しました",window.speechSynthesis.speak(e)):(e.text="後で読むに追加できませんでした",window.speechSynthesis.speak(e))})();})();`
                )
            }}
          >
            Bookmarklet
          </a>
          <a
            className="link link-hover"
            ref={(node) => {
              const url = new URL(document.location.href)
              if (props.mode !== 'share') {
                url.searchParams.append('mode', 'share')
              }
              node && node.setAttribute('href', `${url.href}`)
            }}
          >
            共有向けURL
          </a>
          <a
            className="link link-hover"
            ref={(node) => {
              const url = new URL(document.location.href)
              if (!props.title) {
                url.searchParams.append('title', '後で読む')
              }
              node && node.setAttribute('href', `${url.href}`)
            }}
          >
            タイトル付き
          </a>
          <a
            className="link link-hover"
            href="https://github.com/ebith/atdym/blob/main/README.md#%E4%BD%BF%E3%81%84%E6%96%B9"
          >
            具体例
          </a>
        </div>
        <div>
          <span className="footer-title">連絡先</span>
          <a className="link link-hover" href="https://github.com/ebith/atdym">
            GitHub
          </a>
          <a className="link link-hover" href="https://twitter.com/ebith">
            Twitter
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
