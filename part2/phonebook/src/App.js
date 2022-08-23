import { useState , useEffect} from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personSvc from './services/numbers'
import Notification from './components/Notification'
import Error from './components/Error'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(()=>{
    personSvc.getAll()
    .then(response => {
      setPersons(response)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} setMessage={setMessage}/>
      <Error error={error} setError={setError} />
      <Filter filter={filter} setFilter={setFilter}/>
      <h3>add a new</h3>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} setMessage={setMessage} setError={setError} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} setPersons={setPersons}/>
    </div>
  )
}

export default App