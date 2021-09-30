import axios from 'axios'
import React, { useState, useEffect } from 'react'


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
                return <li key={lang.iso639_2}>{lang.name}</li>
              })}
            </ul>
            <img src={country.flag} alt="flag" width="10%" height="10%"></img>
          </div>
        </div>
      )
    }
    const Weather = ({country}) => {
      const [weather, setWeather] = useState([])
      useEffect( () => {
        const key = process.env.REACT_APP_weatherstack_API_KEY
        var reqUrl = 'http://api.weatherstack.com/current?access_key='+key+'&query='+country.capital
        axios.get(reqUrl).then(response => {
          setWeather(response.data.current) // current
        })
      }, [])
      return <div>
        <h4>Weather in {country.capital}</h4>
        <b>temperature:</b> {weather.temperature} Celcius <br/>
        <img src={weather.weather_icons} alt="weather_icons" ></img> <br/>
        <b>wind:</b> {weather.wind_speed} mph direction {weather.wind_dir} <br/>
      </div>
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
      return <div>
        <SpecifiedOne country={list[0]} />
        <Weather country={list[0]}/>
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