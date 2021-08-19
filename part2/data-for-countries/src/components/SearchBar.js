import React, { useState } from 'react'

const SearchBar = ({ countries, showList, setShowList }) => {
  const [searchCountry, setSearchCountry] = useState('')
  const handleSearchCountryChange = (event) => {
    // find countries in searchbar & setShowList
    event.preventDefault()
    setSearchCountry(event.target.value)
    var matchInLoop = []
    countries.forEach(element => {
      if (element.name.toLowerCase().match(event.target.value.toLowerCase())) {
        matchInLoop.push(element)
      }
    })
    setShowList(matchInLoop)
  }
  const DisplayZone = ({ list }) => {
    if (list.length === 0) {
      // no item in list in the beginnnig
      return <div></div>
    } else if (10 < list.length) {
      // >10 to many
      return <div>
        Too many matches,specify another filter
      </div>
    } else if (2 <= list.length && list.length <= 10) {
      // 2~10 show countries name only
      return <div>
        {list.map(item =>
          <div key={item.name}> {item.name} </div>
        )}
      </div>
    } else {
      // 1 match
      return <div>
        <h2>{list[0].name}</h2>
        <p>capital {list[0].capital}</p>
        <p>population {list[0].population}</p>
        <div>
          <h4>languages</h4>
          <ul>
            {list[0].languages.map(lang => {
              return <li key={lang.iso639_1}>{lang.name}</li>
            })}
          </ul>
          <img src={list[0].flag} alt="flag" width="10%" height="10%"></img>
        </div>
      </div>
    }
  }
  return (
    <div>
      <div>find countries <input value={searchCountry} onChange={handleSearchCountryChange} /></div>
      <DisplayZone list={showList} />
    </div>
  )
}

export default SearchBar