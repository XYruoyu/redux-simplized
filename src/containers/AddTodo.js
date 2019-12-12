import React from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../actions'

class AddTodo extends  React.Component{
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
  }
  get = () => {
    console.log(this.props)
    this.props.dispatch(addTodo(this.state.input.value))
  }
  render() {
    let index = 1
    return (
      <div>
        <input ref={node => this.state.input = node}></input>
        {/* <button onClick={this.props.dispatch(addTodo(input.value))}>添加todos</button> //!this指向错误，下面用箭头才能指向其本身 */}
        {/* <button onClick={() => this.props.dispatch(addTodo(this.state.input.value))}>添加todos</button> */}
        <button onClick={() => this.props.dispatch({type: 'ADD_TODO', id:index++, text:this.state.input.value })}>添加todos</button> {/*  dispath的内容在reducer的第二个参数获取 */}
        {/* <button onClick={this.get}>添加todos</button> */}
      </div>
    )
  }

}

export default connect()(AddTodo)

//* 当前的组件 进行了connect ，所以当前的组件注入了dispatch。dispatch ,来源于在src根目录下的reducer,所以，此dispatch就会去找已经combine在一起的reducer中的type ，根据 dispatch 触发的方法 中引入的action的动作（action用来描述发生了什么，也是在action这里去定义每个动作的含义，每个动作携带的参数。进而传进reducer中的第二个参数。然后reducer根据action传进来的参数进行对state的操作）