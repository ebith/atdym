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
```sh
yarn install
mkdir -p .wrangler/state/d1
sqlite3 .wrangler/state/d1/DB.sqlite3 < ./data/createTable.sql
sqlite3 .wrangler/state/d1/DB.sqlite3 < ./data/createIndex.sql
yarn dev
```

```sh
yarn wrangler d1 create atdym
yarn wrangler d1 execute atdym --file ./data/createTable.sql
yarn wrangler d1 execute atdym --file ./data/createIndex.sql
yarn wrangler publish
```

- RSS出力モードがあっても良いかもしれない
- iOSはユーザの操作無しに読み上げが機能しないのでBookmarkletが動作したかわからない
  - ショートカット.appでHTTP POSTする手が使える

