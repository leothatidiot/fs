import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'

const App = () => {
  const [countries, setCountries] = useState([])
  // const [searchCountry, setSearchCountry] = useState('')
  const [showList, setShowList] = useState([])

  const hook = () => {
    axios.get('https://restcountries.com/v2/all').then(
      response => {
        setCountries(response.data)
      }
    )
  }

  useEffect(hook, [])
  
  return (
    <div>
      <SearchBar countries={countries} showList={showList} setShowList={setShowList}/>
    </div>
  )
}

export default App

// ($env:REACT_APP_weatherstack_API_KEY = "xx") -and (npm start)