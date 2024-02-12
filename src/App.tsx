import React, { FC, Fragment } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App:FC = () => {
  return (
    <Fragment>
      <div className="App">
      <AddTodo/>
      <Todos/>
      </div>
    </Fragment>
  )
}

export default App