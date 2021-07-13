import React from 'react'

import Header from './Header'
import Content from './Content'
import Total from './Total'

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 




  return (
    <div className="App">
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total 
        exercises1 ={course.parts[0].exercises}
        exercises2 ={course.parts[1].exercises}
        exercises3 ={course.parts[2].exercises} />
    </div>
  );
}

export default App;
