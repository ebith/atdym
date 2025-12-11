import type { Database } from '@cloudflare/d1'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { v4 as uuidv4 } from 'uuid'
import { encode } from 'html-entities'
import App from './App'
import Html from './Html'
import Welcome from './Welcome'

interface Env {
  DB: Database
}

const app = new Hono<{ Bindings: Env }>()
app.use(
  '/{add|remove}',
  cors({
    origin: '*',
  })
)

app.get('/', async (c) => {
  const content = ReactDOMServer.renderToString(<Welcome id={uuidv4()} />)
  return c.html('<!DOCTYPE html>' + content)
})

app.get('/:user{[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}}', async (c) => {
  const { user } = c.req.param()
  const { mode, title } = c.req.query()

  const { results } = await c.env.DB.prepare(
    `SELECT id, user, title, url FROM atdym WHERE user = ? ORDER BY id DESC LIMIT 100 ;`
  )
    .bind(user)
    .all()
  const content = ReactDOMServer.renderToString(
    <Html>
      <App list={results} mode={mode} title={title} />
    </Html>
  )

  return c.html('<!DOCTYPE html>' + content)
})

app.post(
  '/add',
  zValidator('json', z.object({ user: z.uuidv4(), url: z.url(), title: z.string().optional() })),
  async (c) => {
    const { user, title, url } = await c.req.valid('json')
    await c.env.DB.prepare(`INSERT INTO atdym(user, title, url) VALUES(?, ?, ?);`)
      .bind(user, encode(title?.slice(0, 128)), url.slice(0, 512))
      .run()
    const count = (await c.env.DB.prepare(`SELECT COUNT(*) AS count FROM atdym WHERE user = ?;`)
      .bind(user)
      .first('count')) as Number
    if (count > 1000) {
      await c.env.DB.prepare(
        `DELETE FROM atdym WHERE id IN (SELECT id FROM atdym WHERE user = ? ORDER BY id DESC LIMIT -1 OFFSET 1000);`
      )
        .bind(user)
        .run()
    }
    return c.body('Added')
  }
)

app.post('/remove', zValidator('json', z.object({ user: z.uuidv4(), id: z.coerce.number() })), async (c) => {
  const { id, user } = await c.req.valid('json')
  await c.env.DB.prepare(`DELETE FROM atdym WHERE id = ? and user =?;`).bind(id, user).run()
  return c.body('Removed')
})

export default app
