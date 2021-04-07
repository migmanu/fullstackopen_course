import React, { useState } from 'react'

const  Statistic = (props) => {
  return (
    <p>{props.name} {props.value}</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.method}>{props.name}</button>
  )
}

const Statistics = (props) => {
  
  if (props.total ===0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>Press a button to see the results!</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <Statistic name="Good"/> 
            </td>
            <td>
            <Statistic value={props.good} />
            </td>
          </tr>
          <tr>
            <td>
            <Statistic name="Neutral" />
            </td>
            <td>
              <Statistic value={props.neutral} />
            </td>
          </tr>
          <tr>
            <td>
            <Statistic name="Bad" />
            </td>
            <td>
              <Statistic value={props.bad} />
            </td>
          </tr>
          <tr>
            <td>
            <Statistic name="Average" />
            </td>
            <td>
              <Statistic value={props.average} />
            </td>
          </tr>
          <tr>
            <td>
            <Statistic name="Positive" />
            </td>
            <td>
              <Statistic value={props.positive} />
            </td>
          </tr>
        </tbody>
        </table>
    </div>
  )
  
  
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  
  const handleGood = () => {
    setTotal(total + 1)
    setGood(good + 1)
    setAverage((good + 1 + (bad * -1)) / (total + 1))
    setPositive((((good + 1) * 100) / (total + 1))+" %")
  }

  const handleNeutral = () => {
    setTotal(total + 1)
    setNeutral(neutral + 1)
    setAverage((good + bad) / (total + 1))
    setPositive((good * 100) / (total + 1)+" %")  
  }

  const handleBad = () => {
    setTotal(total + 1)
    setBad(bad + 1)
    setAverage((((bad * -1) - 1) + good) / (total + 1))
    setPositive((good * 100) / (total + 1)+" %")
  }
  ///
  
  return (
    <div>
      <h1>Give us your feedback!</h1>
      <Button method={handleGood} name="Good"/>
      <Button method={handleNeutral} name="Neutral"/>
      <Button method={handleBad} name="Bad"/>
      <Statistics good={good} bad={bad} neutral={neutral} total={total} 
      average={average} positive={positive} />
    </div>
  )
  
}

  
export default App
