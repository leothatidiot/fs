import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchName, setSearchName] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    // 需要运行一个 json-server
    // npx json-server db.json -p 3001 -w
    personService.read().then(response => {
      setPersons(response)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} />

      <Filter persons={persons} setPersons={setPersons} searchName={searchName} setSearchName={setSearchName}/>

      <h3>Add a new</h3>

      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage}/>

      <h3>Numbers</h3>

      <Persons persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App
