import React from 'react'

const Persons = ({ persons }) => {
  console.log('rendering Persons')
  return <div>
    {persons.map((p) => {
      if (p.show === true) {
        return <div key={p.name}>{p.name} {p.number}</div>
      } else {
        return <div key={p.name}></div>
      }
    })}
  </div>
};

export default Persons