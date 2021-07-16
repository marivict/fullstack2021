import React from 'react'

const Total = (props) => {
  const exercises = props.parts.map(part => part.exercises)
  const result = (s, p) =>(s + p)
  const total = exercises.reduce(result)

    return(
      <div><h4>Total of {total}  excercises</h4></div>
    )
  }

export default Total