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
    const SpecifiedOne = ({country}) => {
      return (
        <div>
          <h2>{country.name}</h2>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
          <div>
            <h4>languages</h4>
            <ul>
              {country.languages.map(lang => {
                return <li key={lang.iso639_1}>{lang.name}</li>
              })}
            </ul>
            <img src={country.flag} alt="flag" width="10%" height="10%"></img>
          </div>
        </div>
      )
    }
    const Hidden = ({country}) => {
      const [isShow, setIsShow] = useState(false)
      const toggle = () => {
        isShow === true ? setIsShow(false) : setIsShow(true)
      }
      return (
        <div>
          {country.name} <button type="button" onClick={ toggle }>show</button>
          {isShow === false ? null : <SpecifiedOne country={country}/>}
        </div>
      )
    }
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
        {list.map(item => {
          return <div key={item.name}>  <Hidden country={item} /> </div>
        })}
      </div>
    } else {
      // match
      return <SpecifiedOne country={list[0]} />
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