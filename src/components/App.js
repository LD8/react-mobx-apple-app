import React from 'react'
import AddTodo from './AddTodo'
import TodoExtra from './TodoExtra'
import TodoList from './TodoList'

function App() {
  return (
    <section className="todoapp">
      <AddTodo />
      <TodoList />
      <TodoExtra />
    </section>
  )
}

export default App
