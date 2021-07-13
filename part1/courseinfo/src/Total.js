import React from 'react'

const Total = (props) => {
    return(
      <div>Total = {`${props.exercises1 + props.exercises2 + props.exercises3}`}</div>
    )
  }

export default Total