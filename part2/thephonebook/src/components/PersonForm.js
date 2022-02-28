import React, { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({persons, setPersons, setMessage}) => {
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  function handleNameChange(event) {
    setNewName(event.target.value)
  }
  function handleNumberChange(event) {
    setNewNum(event.target.value)
  }
  const submitNewPerson = (event) => {
    event.preventDefault()
    var names = []
    persons.forEach(element => {
      names.concat(element.name)
    });
    if(names.includes(newName)) {
      // window.alert(`${newName} is already added to phonebook`)
      if(window.confirm(`${newName} is already added to phonebook,replace the old number with a new one?`)) {
        var id
        persons.forEach(element => {
          if(element.name === newName) {
            id = element.id
          }
        });
        const newPerson = { id: id, name: newName, number: newNum, show: true }
        personService.update(id, newPerson).then(response => {
          console.log(response)
          setPersons(persons.map(p => p.id !== response.id ? p : response))
          console.log(`update successful id=${id}`)
        }).catch(response => {
          setMessage(`Information of ${newName} has already been removed from server.`)
          console.log('update error')
        })
      }
    } else {
      const newPerson = { id:persons.length+1, name: newName, number: newNum, show: true }
      setPersons(persons.concat(newPerson))
      personService
        .create(newPerson)
        .then(createdPerson => {
          setMessage(`Added ${newName}.`)
        })
        .catch(error => {
          setMessage(`${error.response.data.error}`)
          console.log(error.response.data)
        })
    }
  }
  return (
    <form onSubmit={submitNewPerson}>
      <div>name: <input onChange={handleNameChange} /></div>
      <div>number: <input onChange={handleNumberChange} /></div>
      <button type="submit">add</button>
    </form>
  )
}

export default PersonForm