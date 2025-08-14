import React from 'react'

const Html = (props) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="Web app for read it later" />
        <link rel="alternate" href="https://github.com/ebith/atdym" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`Atdym${props.children.props.title ? ': ' + props.children.props.title : ''}`}</title>
        <base target="_blank" />
        <link href="/static/style.css" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
        <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <div className="container mx-auto py-10">
          <div id="app">{props.children}</div>
        </div>
        <template id="props" dangerouslySetInnerHTML={{ __html: JSON.stringify(props.children.props) }}></template>
        <script src="/static/client.js"></script>
      </body>
    </html>
  )
}

export default Html
