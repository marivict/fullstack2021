import React, {useEffect, useState} from 'react'
import axios from 'axios'
const {REACT_APP_API_KEY}  = process.env

const Country = ({
        name, 
        capital, 
        population,
        languages,
        flag
    }) => {
        const [weather, setWeather] = useState([])

        useEffect(() =>{
            axios
            .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`)
            .then(response => setWeather([response.data]))
        },[])
    return(
        <>
            <h1>{name}</h1>
            <p><b>Capital: </b>{capital}</p>
            <p><b>Population: </b>{population}</p>
            <h3>Language</h3>
            <ul>
                {languages.map(language => <li>{language.name}</li>)}
            </ul>

            <img src={flag} style={{width:'200px', height:'200px'}} alt='flag'/>

            <h2>Weather in {capital}</h2>
            {weather.map((clime) => {
                return(
                    <div>
                        <p><b>Temperature:</b>{`${clime.current.temperature} Celcius`}</p>
                        <p>
                            <img src={`${clime.current.weather_icons}`} alt='icon' />
                        </p>
                        <p><b>Wind:</b>{`${clime.current.wind_speed} mph ${clime.current.wind_dir}`}</p>
                    </div>
                )
            })}

        </>
    )
}

export default Country