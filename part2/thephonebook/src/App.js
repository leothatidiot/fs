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
  const [personsWithShow, setPersonsWithShow] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  useEffect(() => {
    // 需要运行一个 json-server
    // npx json-server db.json -p 3001 -w
    personService.read().then(response => {
      setPersons(response)
      // setPersonsWithShow({...response, show1: true})
      setPersonsWithShow(response.map(elem => {return {...elem, show:true}}))
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} />

      <Filter persons={personsWithShow} setPersons={setPersonsWithShow} searchName={searchName} setSearchName={setSearchName}/>
      {/* <Filter persons={persons} personToShow={personToShow} SetPersonToShow={SetPersonToShow} searchName={searchName} setSearchName={setSearchName}/> */}

      <h3>Add a new</h3>

      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage} newName={newName} setNewName={setNewName} newNum={newNum} setNewNum={setNewNum}/>

      <h3>Numbers</h3>

      <Persons persons={personsWithShow} setPersons={setPersonsWithShow}/>
    </div>
  )
}

export default App
