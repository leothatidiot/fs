import React from 'react'
import personService from '../services/persons';

const Persons = ({ persons, setPersons }) => {
  console.log(`rendering Persons: ${persons.length}`)
  // console.log(persons)
  // const[personToShow, SetPersonToShow] = useState([])
  var personToShow = []

  persons.forEach(p => {
    if(p.show === true) {
      personToShow = personToShow.concat(p)
      // SetPersonToShow(personToShow.concat(p))
    }
  })

  // console.log(personToShow)
  
  const clickDelete = (p) => {
    return () => {
      if(window.confirm(`Delete ${p.name} id:${p.id} ?`)) {
        personService.deleteId(p.id).then( () => {
          var personsCopy = persons.concat()
          personsCopy.splice(personsCopy.findIndex(item => item.id === p.id), 1)
          console.log(persons)
          console.log(personsCopy)
          // console.log(personsCopy)
          setPersons(personsCopy)
        })
        console.log(`deleteID id=${p.id}`)
      }
    }
  }

  return <div>
    {personToShow.map( p => {
      return <div key={p.name}>
        {p.name} {p.number} {}
        <button onClick={clickDelete(p)}>delele</button>
      </div>
    })}
  </div>

  // return <div>
  //   {persons.map((p) => {
  //     if (p.show === true) {
  //       return <div key={p.name}>
  //         {p.name} {p.number} {}
  //         <button onClick={() => {
  //           if(window.confirm("Delete "+p.name+"?")) {
  //             personService.deleteId(p.id)}
  //           }
  //         }>delete</button>
  //       </div>
  //     } else {
  //       return <div key={p.name}></div>
  //     }
  //   })}
  // </div>
};

export default Persons