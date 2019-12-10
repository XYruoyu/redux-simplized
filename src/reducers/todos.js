const todos = (state = [{id: 0,text: 'text', completed: true }], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(action.id, state)
      console.log(...state)
      console.log([...state, {id: action.id, text: action.text, completed: false}])
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
