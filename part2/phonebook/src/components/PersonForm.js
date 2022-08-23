import React from 'react'
import personSvc from '../services/numbers'
import Notification from './Notification'

const PersonForm=({newName, setNewName, newNumber, setNewNumber, persons, setPersons, setMessage, setError})=>{
    
    const handleNewName = (event)=> {
        setNewName(event.target.value)
      }
    
      const handleNewNumber = (event)=> {
        setNewNumber(event.target.value)
      }
    
      const handleFormSubmit = (event)=>{
        event.preventDefault()
        const personObj ={
          name : newName,
          number : newNumber,
          id: persons.length+1
        }
        let found=false;
        persons.forEach( item => {
          let x =  item.name.toLowerCase()
          let y = newName.toLowerCase()
          if(new String(x).valueOf() == new String(y).valueOf() && !found)
          {
            found=true;
            if(window.confirm(`${newName} is already added to phonebook, replace the older number with the new one ?`))
            {
              personSvc.update(item.id, personObj)
              .then(response => {
                setPersons(persons.map(p => p.id != item.id?p:response))
                setMessage(`Updated ${response.name}`)
              }).catch(error =>{
                setError(`Information about ${newName} not present on the server`);
                setPersons(persons.filter(p =>p.id != item.id));
              })
            }
          }  
        })
        
        if(!found)
        {
        personSvc
        .create(personObj)
        .then(person =>{
          if(!found)
          {
            setPersons(persons.concat(person))
            setMessage(`Added ${person.name}`)
          }

        })
      }
      setNewName('')
      setNewNumber('')
      }

    return(
        <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm