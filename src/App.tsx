import React from 'react'
import Footer from './Footer'
import List from './List'

const App = (props) => {
  return (
    <>
      <List {...props} />
      <Footer {...props} />
    </>
  )
}

export default App
