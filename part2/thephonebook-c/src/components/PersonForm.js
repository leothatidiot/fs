import React, { useState } from 'react'


const PersonForm = ({persons, setPersons}) => {
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
    if (JSON.stringify(persons).indexOf(newName) !== -1) { // https://www.cnblogs.com/leiting/p/9253461.html
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNum, show: true }))
    }
    // console.log(persons)
  }
  return (
    <form onSubmit={submitNewPerson}>
      <div>name: <input onChange={handleNameChange} /></div>
      <div>number: <input onChange={handleNumberChange} /></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm