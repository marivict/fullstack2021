import React from 'react'

import Parts from './Parts'

const Content = (props) => {
    return(
      <div>
        <Parts part={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Parts part={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Parts part={props.parts[2].name} exercises={props.parts[2].exercises} />
      </div>
    )
  }

export default Content