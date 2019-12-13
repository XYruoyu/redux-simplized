import React from 'react'
import { connect } from 'react-redux'

class Footer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      btnList: [{value: 'All', key: 'SHOW_ALL'},{value: 'Completed', key: 'SHOW_COMPLETED'},{value: 'Active', key: 'SHOW_ACTIVE'}],
    }

  } 
  toggleState(item) {
    this.props.dispatch({type: 'SET_VISIBILITY_FILTER', filter: item.key})
  }
  render () {
    return (
      <div>
      <span>Show: </span>
      {this.state.btnList.map((item,i) => (
        <button key={i} disabled={this.props.visibleState === item.key} onClick={() => this.toggleState(item)}>{item.value}</button>
      ))}

      </div>
    )
  }
}

const mapStateToProps =  state => ({
  visibleState: state.visibilityFilter
})
export default connect(mapStateToProps)(Footer)
