import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [anecdoteScores, setAnecdoteScores] = useState(
    anecdotes.map((anecdote, index) => { 
      let holder = 0;
      return holder
    })
  )
  const [anecdoteIndexWithMostScores, setIndexWithMostScores] = useState(0)

  let anectodeIndexWithMostScores = Object.keys(anecdoteScores).reduce(
    function(a, b){ return anecdoteScores[a] > anecdoteScores[b] ? a : b }
  );
    
  const nextAnecdote = () => {
    const selection = Math.floor(Math.random()*anecdotes.length)
    setSelected(selection)
  }
  const vote = () => {
    let updatedAnectodeScores = anecdoteScores;
    updatedAnectodeScores[selected] += 1
    setAnecdoteScores(updatedAnectodeScores);
    console.log(updatedAnectodeScores)
    setIndexWithMostScores(Object.keys(anecdoteScores).reduce(
      function(a, b){ return anecdoteScores[a] > anecdoteScores[b] ? a : b }
    ))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has some votes</p>
      <div>
        <button onClick={vote}>
          vote
        </button>
        <button onClick={nextAnecdote}>
          next anecdote
        </button>
      </div>
      
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[anectodeIndexWithMostScores]}</p>
    </div>
  )
}

export default App