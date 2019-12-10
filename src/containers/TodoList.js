import { connect } from 'react-redux'
import React from 'react'
import { toggleTodo } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
class TodoList extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.todos.map(todo =>  //* map 要有返回值，此处不能加大括号返回
          <div key={todo.id} onClick={() => this.props.toggle(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</div>
        )}
      </div>
    )
  }
}

const mapStateToProps =  state => ({
  // todos: state.todos //* 从stort中取出的state，变成组件的props
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggle: id => dispatch(toggleTodo(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
