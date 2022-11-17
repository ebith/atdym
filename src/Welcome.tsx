import React from 'react'

const Welcome = (props) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Atdym</title>
        <base target="_blank" />
        <link href="/static/style.css" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
        <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <div className="container mx-auto py-10">
          <div className="card w-1/2">
            <div className="card-body items-center text-center">
              <h1 className="card-title">Atdymへようこそ</h1>
              <p>簡素で早い“後で読む”を提供します。</p>
              <a href={`/${props.id}`} className="link link-primary">
                使ってみる
              </a>
              <div className="alert">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>
                  Atdymではログインなどによる管理はありません。
                  <br />
                  ユーザページのURLを知っている人が自由に追加や削除ができる仕組みです。
                </span>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

export default Welcome
