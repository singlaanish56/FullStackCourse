import { useState } from 'react'

const Heading = ({text}) => <div><h1>{text}</h1></div>

const Button = ({handleClick , text}) => <button onClick= {handleClick}>{text}</button>

const StatisticLine = ({text, value, extra=''}) => {
return (
  <tr>
    <td>{text}</td>
    <td>{value} {extra}</td>
  </tr>
)}

const Statistics = ({goodObj, neutralObj, badObj, totalObj, avgObj, perObj}) => {

  if(goodObj.value === 0 && neutralObj.value === 0 && badObj.value === 0)
  {
    return(<div><h3>No feedback given</h3></div>)
  }
  else{
  perObj.value=goodObj.value/(totalObj.value)
  return (
    <div>
      <Heading text="statistics" />
      <table>
        <tbody>
        <StatisticLine text= {goodObj.text} value={goodObj.value}/>
        <StatisticLine text= {neutralObj.text} value={neutralObj.value}/>
        <StatisticLine text= {badObj.text} value={badObj.value}/>
        <StatisticLine text= {totalObj.text} value={totalObj.value}/>
        <StatisticLine text= {avgObj.text} value={avgObj.value}/>
        <StatisticLine text= {perObj.text} value={perObj.value} extra='%'/>
        </tbody>
      </table>
    </div>
  )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good+1)
  const incrementNeutral = () => setNeutral(neutral+1)
  const incrementBad = () => setBad(bad+1)

  return (
    <div>
      <Heading text="give feedback" />
      <Button handleClick={incrementGood} text='good'/>
      <Button handleClick={incrementNeutral} text='neutral'/>
      <Button handleClick={incrementBad} text='bad'/>
      <Statistics 
        goodObj={{text:'good',value: good}}
        neutralObj={{text:'neutral',value: neutral}}
        badObj={{text:'bad',value: bad}}
        totalObj={{text:'all',value: good+neutral+bad}}
        avgObj={{text:'average',value:(good+neutral+bad)/3}}
        perObj={{text:'positive',val:0}}
      />
    </div>
  )
}

export default App