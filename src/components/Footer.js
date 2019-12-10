import React from 'react'
import Btn from '../containers/FilterLink'



const Footer = () => (
  <div>
    <span>Show: </span>
    <Btn filter="SHOW_ALL">
      All
    </Btn>
    <Btn filter="SHOW_COMPLETED">
      Completed
    </Btn>
    <Btn filter="SHOW_ACTIVE">
    Active
    </Btn>
  </div>
)

export default Footer
