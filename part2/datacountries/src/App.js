import React,{useState, useEffect} from 'react'
import axios from 'axios'

import Country from  './components/Country'
import Button from './components/Button'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response =>{
      setCountries(response.data)
    })
  },[])

console.log('effect')

  const handleFilter = (e) =>{
    const getValue = e.target.value
    setFilter(getValue)
  } 

  const filterCountriesNames  = countries.filter((country) => {
    if(filter === ''){
      return country
    } else if (country.name.toLowerCase().includes(filter.toLowerCase())){
        return country
    }
  })

  const callback = (newValue) => {
    console.log(newValue)
  }

  callback()

  const countryArray = () => {
    if(!filter) {
      return(
        <ul>
          {filterCountriesNames.map(country => <li>{country.name}</li>)}
        </ul>
      )
    }
    else if(filterCountriesNames.length > 10 && filter) {
      return ('Too many matches, specify another filter')
    }else if(filterCountriesNames.length < 10 && filterCountriesNames.length > 1) {
      return(
        <ul>
          {filterCountriesNames.map(country => <li>{country.name} <Button parentCallback={callback} /></li>)}
        </ul>
      )
    }
    else if(filterCountriesNames.length === 1) {
      return(filterCountriesNames.map((country) => 
        <Country 
          name={country.name} 
          capital={country.capital} 
          population={country.population}
          languages={country.languages} 
          flag ={country.flag}
          showCountryinParent
        />))
    }
  }
    
  return (
    <div>
      <div>
        <input value={filter} onChange={handleFilter} />
      </div>
      <div>
        {countryArray()}
      </div>
    </div>
  );
}

export default App;
