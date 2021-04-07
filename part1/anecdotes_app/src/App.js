import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.method}>{props.name}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  

  const handleSelected = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length - 0) + 0))
  }

  const handleVotes = () => {
    const votes_copy = [...votes]
    votes_copy[selected]  += 1
    setVotes(votes_copy)
  }
  console.log(votes)
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button method={handleVotes} name='Vote' />
      <Button method={handleSelected} name='Next anecdote' />
    </div>
  )
}


export default App
