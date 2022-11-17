# Atdym

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

- 使い方が使い方じゃない
- RSS出力モードがあっても良いかもしれない