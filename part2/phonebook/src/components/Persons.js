import React from 'react'
import personSvc from '../services/numbers'

const Display = ({person, filter, setPersons}) => {

    const handleOnClick = (event) =>{
      event.preventDefault()
      if(window.confirm(`Delete ${person.name} ?`))
      {
        personSvc.remove(person.id)
        personSvc.getAll().then(response => setPersons(response))
      }
    }

    let x = person.name.toLowerCase()
    let y = filter.toLowerCase()
    if(x.includes(y))
    {
      return(
        <div>
          {person.name} {person.number}  <button onClick={handleOnClick}>delete</button>
        </div>
      )
    }
}

const Persons = ({persons, filter, setPersons}) =>
        <div>
            {persons.map(person =>
            <Display key={person.id} person={person} filter={filter} setPersons={setPersons}/>
            )}
        </div>

export default Persons