# Atdym

## 使い方
### [Feedeen](https://www.feedeen.com/)
- 詳細設定 > 外部サービス > Webhook
- 送信先URL: https://atdym.feelmy.net/add
- 送信内容: { "title": "${title}", "url": "${url}", "user": "ユーザID" }

### [tridactyl](https://github.com/tridactyl/tridactyl)
```javascript
;(async () => {
  const title = document.getSelection().toString() || document.title || document.location.href
  const response = await fetch('https://atdym.feelmy.net/add', {
    method: 'POST',
    body: JSON.stringify({
      user: 'ユーザID',
      url: document.location.href,
      title,
    }),
  })
  if (response.status === 200) {
    fillcmdline_nofocus(`Added: ${title}`)
  } else {
    fillcmdline_nofocus('Request failed')
  }
})()
```

## メモ 
### Local development
```sh
yarn install
yarn wrangler d1 execute atdym --local --file ./data/createTable.sql
yarn wrangler d1 execute atdym --local --file ./data/createIndex.sql
yarn dev
```

### Deploy
```sh
yarn wrangler d1 create atdym
yarn wrangler d1 execute atdym --file ./data/createTable.sql
yarn wrangler d1 execute atdym --file ./data/createIndex.sql
yarn deploy
```

- RSS出力モードがあっても良いかもしれない
- iOSはユーザの操作無しに読み上げが機能しないのでBookmarkletが動作したかわからない
  - ショートカット.appでHTTP POSTする手が使える

