import React,{useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.
    get('https://restcountries.eu/rest/v2/all').
    then(response =>{
      setCountries(response.data)
    },[countries])
  })

  const handleFilter = (e) =>{
    const getValue = e.target.value
    setFilter(getValue)
  }

  
    const filterCountriesNames  = countries.filter((country) => {
      if(filter === ''){
        return country.name
      } else if (country.name.toLowerCase().includes(filter.toLowerCase())){
        return country.name
      }
    })

  return (
    <div>
      <div>
        <input value={filter} onChange={handleFilter} />
      </div>
      <ul>
        {filterCountriesNames.map(country => <li>{country.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
