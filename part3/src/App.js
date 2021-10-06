import React, { useState } from 'react'


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

function indexOfMax(vote) {
  if (vote.length === 0) {
    return -1
  }
  var max = vote[0]
  var maxIndex = 0

  for (var i = 0; i < vote.length; i++) {
    if (vote[i] > max) {
      maxIndex = i
      max = vote[i]
    }
  }

}



const App = () => {
  
   
  

  const voteCalc = () => {
    
    const copy = [ ...vote]
    copy[selected] += 1
    return (
    setVote(copy)
    )
  }
  const HighestVote = ( {anecdotes, vote} ) => {
    if (Math.max( ...vote) === 0) {
      return (
        <div>no votes given</div>
      )
    }

    return (
      <div>
        {anecdotes[vote.indexOf(Math.max(...vote))]}
      <br/>  
      has {Math.max(...vote)} votes
        <indexOfMax vote={vote}/>
      </div>
      
    )

   
  }  

  const randomInt = () => (
    Math.floor(Math.random() * Math.floor(anecdotes.length))
  )
  const randomIndex = () => {
    setSelected(randomInt(anecdotes.length))
  }  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0, 0])
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <Button onClick={voteCalc}
        text = 'vote'
      />      
      <Button onClick={randomIndex}
        text = 'next anecdote'
      />
      <h1>Anecdote with most votes</h1>
      <HighestVote anecdotes={anecdotes} vote={vote}/>
    </div>
  )
}

export default App
