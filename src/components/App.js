import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
import Footer from './Footer'


const App = () => (
  <div>
    
    <AddTodo />
    <TodoList></TodoList>
    <Footer />

  </div>
)

export default App
