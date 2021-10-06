import React, { useState } from 'react'

const StatisticLine = ({text, value}) => {
  if (text === 'positive')
  {
    return (
      <tr><td>{text}</td><td>{value} %</td></tr>
    )
  }
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}


const Statistics = ({feedback}) => {
  if (feedback.good === 0 && feedback.bad === 0 && feedback.neutral === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }  
  return (
    <div>
      <table>
        <tbody>
        <StatisticLine text='good' value={feedback.good}/>
        <StatisticLine text='neutral' value={feedback.neutral}/>
        <StatisticLine text='bad' value={feedback.bad}/>
        <StatisticLine text='all' value={feedback.sum}/>
        <StatisticLine text='average'
        value={(feedback.bad * -1 + feedback.good) / feedback.sum}/>
        <StatisticLine text='positive' value={(feedback.good / feedback.sum * 100.0)}/>          
        </tbody>
      </table>
   </div>
  )
}





const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }
  const addNeutral = () => {
    setNeutral(neutral + 1)
  }
  const addBad = () => {
    setBad(bad + 1)
  }
  const feedback = {
    good: good, neutral: neutral, bad: bad,
    sum: good + neutral + bad
  }



  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={addGood}
        text = 'good'
      />
      <Button onClick={addNeutral} 
      text = 'neutral'
      />
      <Button onClick={addBad}
      text = 'bad'
      />
      <h1>Statistics</h1>
      <Statistics feedback={feedback}/>
    </div>
  )
}
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


const Display = ({ addGood }) => <div>{addGood}</div>
  


export default App
