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
    },[])
  })

  const handleFilter = (e) =>{
    const getValue = e.target.value
    setFilter(getValue)
  }

  
    const filterCountriesNames  = countries.filter((country) => {
      if(filter === ''){
        return country.name
      } else if (country.name.toLowerCase().includes(filter.toLowerCase())){
          if(country.length < 10){
            return country.name
          } else {
            return <p>Too many matches, specify another filter</p>
          }
      }
      console.log(country.length)
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
