import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', show: true },
    { name: 'Ada Lovelace', number: '39-44-5323523', show: true },
    { name: 'Dan Abramov', number: '12-43-234345', show: true },
    { name: 'Mary Poppendieck', number: '39-23-6423122', show: true }
  ])

  const [searchName, setSearchName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter persons={persons} setPersons={setPersons} searchName={searchName} setSearchName={setSearchName}/>

      <h3>Add a new</h3>

      <PersonForm persons={persons} setPersons={setPersons}/>

      <h3>Numbers</h3>

      <Persons persons={persons} />
    </div>
  )
}

export default App
