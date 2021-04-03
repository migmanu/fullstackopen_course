import React, { useState } from 'react'

const Statistics = (props) => {
  
  return (
    <div>
    <h1>Give us your feedback!</h1>
      <button onClick={props.handleGood}>Good</button>
      <button onClick={props.handleNeutral}>Neutral</button>
      <button onClick={props.handleBad}>Bad</button>
      <h2>Results</h2>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <p>Total {props.total}</p>
      <p>Average {props.average}</p>
      <p>Positive {props.positive}%</p>
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
    setPositive((((good + 1) * 100) / (total + 1)))
  }

  const handleNeutral = () => {
    setTotal(total + 1)
    setNeutral(neutral + 1)
    setAverage((good + bad) / (total + 1))
    setPositive((good * 100) / (total + 1))  
  }

  const handleBad = () => {
    setTotal(total + 1)
    setBad(bad + 1)
    setAverage((((bad * -1) - 1) + good) / (total + 1))
    setPositive((good * 100) / (total + 1))
  }
  ///
  
  return (
    <Statistics handleGood={handleGood} handleBad={handleBad} handleNeutral={handleNeutral} good={good}
    bad={bad} neutral={neutral} total={total} average={average} positive={positive} />
  )
  
}

export default App
