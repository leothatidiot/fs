import React, { useState } from 'react'

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td> <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good,neutral,bad,all,sum}) => {
  if (all===0) {
    return (
      <div>
        <h2>statistics</h2>
        <div>No feedback given</div>
      </div>
    )
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='all' value={all} />
          <Statistic text='average' value={sum/all} />
          <Statistic text='positive' value={good/all} />
        </table>
      </div>
    )
  }
}

const Button = ({text, handle}) => {
  return (
    <button onClick={handle}>{text}</button>
  )
}

let all=0, sum=0
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => { setGood(good+1); all+=1; sum+=1; console.log(all,sum) }
  const handleNeutral = () => { setNeutral(neutral+1); all+=1 }
  const handleBad = () => { setBad(bad+1); all+=1; sum-=1 }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handle={handleGood}/>
      <Button text='neutral' handle={handleNeutral}/>
      <Button text='bad' handle={handleBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} sum={sum} />
      
    </div>
  )
}

export default App