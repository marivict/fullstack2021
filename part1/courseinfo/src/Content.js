import React from 'react'

import Parts from './Parts'

const Content = (props) => {

  const courseParts = props.parts.map(part =>  <Parts part={part.name} exercises={part.exercises} />)
  console.log('parts', courseParts)
    return(
      <div>
       {courseParts}
      </div>
    )
  }

export default Content