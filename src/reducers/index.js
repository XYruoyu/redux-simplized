import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})


//* 在组件中取的时候，用connect里的第一个参数，mapStateToProps，方法的第一个参数state 去分别取 state.todos,state.visibilityFilter,也可以相应的取其中的所有dispatch
// 如下
// const mapStateToProps = state => ({
//   todos: getVisibleTodos(state.todos, state.visibilityFilter)
// })

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)