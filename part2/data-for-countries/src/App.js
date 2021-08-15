import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [showList, setShowList] = useState([])

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then(
      response => {
        setCountries(response.data)
      }
    )
  }

  useEffect(hook, [])

  const SearchBar = ({countries, showList, setShowList}) => {
    var matchInLoop = []
    const handleSearchCountryChange = (event) => {
      event.preventDefault()
      setSearchCountry(event.target.value) 
      countries.forEach(element => {
        // if(element.name.toLowerCase().match(event.target.value) && !showList.includes(element)) {
        //   // setShowList(showList.concat(element))
          
        // } else {
        //   if(showList.includes(element)) {
        //     setShowList(showList.splice(element))
        //   }
        // }
        if(element.name.toLowerCase().match(event.target.value)) {
          if(!matchInLoop.includes(element))
            matchInLoop.concat(element)
        } else {
          if(matchInLoop.includes(element))
            matchInLoop.splice(matchInLoop.indexOf(element), 1)
        }
      })
      console.log(matchInLoop)
    }
    return (
      <div>
      <div>find countries <input value={searchCountry} onChange={handleSearchCountryChange} /></div>
      <DisplayZone list={showList} />
      </div>
    )
  }

  const DisplayZone = ({list}) => {
    if(10 < list.length) {
      return (
        list.forEach( item => {
          <div key={item.name}> {item.name} </div>
        })
      )
    } else if (2 <= list.length && list.length <= 10) {
      return <div>
        
      </div>
    } else {
      return <div></div>
    }
  }

  return (
    <div>
      <SearchBar countries={countries} showList={showList} setShowList={setShowList}/>
    </div>
  )
}

export default App
