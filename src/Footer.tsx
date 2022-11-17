import React from 'react'

const Footer = (props) => {
  return (
    <>
      <div className="divider my-10"></div>
      <footer className="footer">
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
                  `javascript:void%20function(){(async()=%3E{const%20a=new%20SpeechSynthesisUtterance;a.lang=%22ja-JP%22;const%20b=await%20fetch(%22http://atdym.feelmy.net/add%22,{method:%22POST%22,body:JSON.stringify({user:%22${
                    user![0]
                  }%22,url:document.location.href,title:document.title||document.location.href})});200===b.status%3F(a.text=%22\u5F8C\u3067\u8AAD\u3080\u306B\u8FFD\u52A0\u3057\u307E\u3057\u305F%22,window.speechSynthesis.speak(a)):(a.text=%22\u5F8C\u3067\u8AAD\u3080\u306B\u8FFD\u52A0\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F%22,window.speechSynthesis.speak(a))})()}();`
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
              console.log(url)
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
