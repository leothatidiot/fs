import React from 'react'

const Filter = ({persons, setPersons, searchName, setSearchName}) => {
  const handleSearchNameChange = (event) => {
    event.preventDefault()
    setSearchName(event.target.value)
    var personsCopy = persons
    personsCopy.forEach(element => {
      if (element.name.toLowerCase().match(event.target.value.toLowerCase())) {
        element.show = true
      } else {
        element.show = false
        console.log('change something to False')
      }
    });
    setPersons(personsCopy)
    console.log('setPersons...', event.target.value)
  }
  return (
    <div>filter shown with <input value={searchName} onChange={handleSearchNameChange} /></div>
  )
}

export default Filter