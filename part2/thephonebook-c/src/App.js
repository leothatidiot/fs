import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
    })
  }, [])

  console.log('render', persons.length, 'persons')

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
