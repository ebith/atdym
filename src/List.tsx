import React, { useState } from 'react'

const List = (props) => {
  const [list, setList] = useState(props.list)

  const handleClick = async (id, user) => {
    if (props.mode === 'share') return
    const response = await fetch('/remove', {
      method: 'POST',
      body: JSON.stringify({ id: id.toString(), user: user }),
    })
    setList(
      list.filter((v) => {
        return v.id !== id
      })
    )
  }

  return (
    <ul className="menu w-full">
      {list.map((v) => {
        return (
          <li key={v.id} className="border-b">
            <a
              href={v.url}
              onClick={async () => {
                await handleClick(v.id, v.user)
              }}
              className="link link-primary hover:bg-stone-50 py-2 link-hover"
            >
              {v.title || v.url}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default List
