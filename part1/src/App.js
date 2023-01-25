import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0);
  const [points, setPoints] = useState(new Uint8Array(8)); 

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const Statistics = (props) => {
    if(!props.all) {
      return (
        <div>
        </div>
      )
    }
    return (
      <div>
        {props.text} {props.opinion}
      </div>
    )
  }

  const Display = (props) => {
    if(!props.all)
    return (
      <div>
        No feedback sent
      </div>
    )
  }

  const handleClick = () => {
    const copy = [...points]
    copy[selected]++
    setPoints(copy)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={ () => setGood(good+1) }>good</button>
      <button onClick={ () => setNeutral(neutral+1) }>neutral</button>
      <button onClick={ () => setBad(bad+1) }>bad</button>
      <h1>statics</h1>
      <Statistics text="good" opinion = {(good)} all={good + bad + neutral}/>
      <Statistics text="neutral" opinion = {(neutral)} all={good + bad + neutral}/>
      <Statistics text="bad" opinion = {(bad)} all={good + bad + neutral}/>
      <Statistics text="all" opinion = {(good + bad + neutral)} all={good + bad + neutral}/>
      <Statistics text="positive" opinion = {good*100/(good+bad+neutral)} all={good + bad + neutral}/>
      <Statistics text="average" opinion = {(good+bad+neutral)/3} all={good + bad + neutral}/>
      <Display text="No feedback sent" all={good + bad + neutral}/>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Show random anecdote</button>
      <button onClick={handleClick}>vote</button>
      {anecdotes[selected]}
      {points[selected]}
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[points.indexOf(Math.max(...points))]}</p>
    </div>
  )
}

export default App