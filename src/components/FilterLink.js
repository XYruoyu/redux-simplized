
import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

class Btn extends React.Component{
  constructor(props) {
    super(props)

  }
  render () {
    //! 通过props的方法，调用时加()
    return (
      <button onClick={()=> this.props.onClick()} disabled={this.props.active}>{this.props.children}</button> //! children 为组件包含体 
    )
  }
} 
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Btn)
