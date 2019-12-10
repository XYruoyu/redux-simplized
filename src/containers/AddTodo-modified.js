import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

//! 不懂这里的dispatch 是从哪里接收来的

// const AddTodo = ({dispatch}) => {
//   let input

//   return (
//     <div>
//         <input ref={node => input = node} />
//         <button onClick={(dispatch(addTodo(input.value)))}>
//           Add Todo
//         </button>
//     </div>
//   )
// }

// * 改为 class组件 ()
//! 有待确认， 是 connet过后， 就有dispatch的方法吗

//* 答案 网址 https://www.redux.org.cn/docs/react-redux/api.html
class AddTodo extends React.Component{
  constructor(props) {
    super(props)

  }
  render() {
    return (
    <div>
        <input ref={node => input = node} />
        <button onClick={(props.dispatch(addTodo(input.value)))}>
          Add Todo
        </button>
    </div>

    )
  }
}




export default connect()(AddTodo)
