import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)
// const TodoList = ({ todos, toggleTodo }) => (
//   <ul>
//     {todos.map(todo =>
//       <li
//         key={todo.id}
//         style={{
//           textDecoration: todo.completed ? 'line-through' : 'none'
//         }}
//         onClick={() => toggleTodo(todo.id)}
//     >{todo.text}</li>
//     )}
//   </ul>
// )


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
