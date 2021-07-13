import React,{useState} from 'react'

const Button = ({onclick, text}) => {
  return <button onClick={onclick}>{text}</button>
}

const Statitic = ({text, value}) => {
  return (
    <tr>
      <td>{text} {value}</td>
    </tr>
  )
}

const Statitics = ({good, bad, neutral}) => {
 
  const total = good + bad + neutral
  const positive = () => (good / total) * 100 + " %";
  const average = () => (good - bad) / total

  if(total === 0) {
   return <tr><td>No feedbacks Given</td></tr>
  }

  return (
    <div>
      <Statitic text='Good:' value={good} />
      <Statitic text='Bad:' value={bad} />
      <Statitic text='Neutral:' value={neutral} />
      <Statitic text='All:' value={total} />
      <Statitic text='Average:' value={average()} />
      <Statitic text='Positive:' value={positive()} />
    </div>
  )
  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const clickGood = () => setGood(good + 1)

  const clickBad = () => setBad(bad + 1)

  const clickNeutral = () => setNeutral(neutral + 1)
  

  return (
    <table>
      <tr>
        <td>
          <h1>Give feedbacks</h1>
        </td>
      </tr>
      
      <tr>
        <td><Button onclick={clickGood} text="Good"/>
        <Button onclick={clickBad} text="Bad"/>
        <Button onclick={clickNeutral} text="Neutral"/></td>
      </tr>

      <tr><td><h1>Statistics</h1></td></tr>
        <Statitics good={good} bad={bad} neutral={neutral} />
    </table>
  );
}

export default App;
