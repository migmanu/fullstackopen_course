import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.method}>{props.name}</button>
  )
}

const MostVoted = (props) => {
  var inx= props.votes.indexOf(Math.max(...props.votes))
  if (Math.max(...props.votes) === 0) {
    return (
      <p>No votes yet!</p>
    )
  }
  return (
    <p>
      {props.anecdotes[inx]}
    </p>

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
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button method={handleVotes} name='Vote' />
      <Button method={handleSelected} name='Next anecdote' />
      <h2>Anecdote with most votes</h2>
      <MostVoted votes={votes} anecdotes={anecdotes} />
    </div>
  )
}


export default App
