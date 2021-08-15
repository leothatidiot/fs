import React, { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Anecdote = ({anecs, sel}) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecs[sel]}</p>
    </div>
  )
}

const MostVote = ({anecs,arr}) => {
  var indexOfMax = arr.indexOf(Math.max(...arr));
  if (Math.max(...arr)===0) { // no vote
    return (
      <div></div>
    )
  } else {
    return (
      <div>
        <h1>Anecdote with most vote</h1>
        <p>{anecs[indexOfMax]}</p>
        <p>has {Math.max(...arr)} votes</p>
      </div>
    )
  }
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
  const [points, setPoints] = useState(new Array(anecdotes.length+1).join('0').split('').map(parseFloat)) // https://stackoverflow.com/questions/20222501/how-to-create-a-zero-filled-javascript-array-of-arbitrary-length/22209781

  const getRandSel = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  const updatePoints = (i) => {
    return () => {
      let copy = [...points]
      copy[i] += 1
      setPoints(copy)
      console.log(copy)
    }
  }

  return (
    <div>
      <Anecdote anecs={anecdotes} sel={selected} />
      <button onClick={updatePoints(selected)}>vote</button>
      <button onClick={getRandSel}>next anecdote</button>
      <MostVote anecs={anecdotes} arr={points}/>
    </div>
  )
}

export default App