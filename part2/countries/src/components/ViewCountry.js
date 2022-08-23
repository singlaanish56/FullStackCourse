import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
const ViewCountry = ({country}) =>{

    const [weather, setWeather] =useState({})
    const obj  = country.languages
    const lat = country.capitalInfo.latlng[0]
    const lng = country.capitalInfo.latlng[1]
    const api_key ='5f2a39022582f1b962d16fe294fd1cf9'

    const setWeatherhooks = () => {axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`)
    .then(response => {
        if(response.data)
        {
            const iconid = response.data.weather[0].icon
            const obj  = {
                temp : response.data.main.temp,
                src : `http://openweathermap.org/img/wn/${iconid}@2x.png`,
                wind : response.data.wind.speed
            }
            setWeather(obj)
        }
    })
    .catch(()=>{
        console.log('error')
    })
}
    useEffect(setWeatherhooks, [])

    let languages = ['']
    for(const language in obj)
    {
        console.log(`<li>${obj[language]}</li>`)
        languages.push(obj[language])
    }
    languages.splice(0,1)



return(
    <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>languages</h3>
        <ul>
            {languages.map(language =>
                <li key={language}>{language}</li>
            )}
        </ul>
        <img src={country.flags["png"]}></img>
        <h2>Weather in {country.capital}</h2>
        <p>temperature {weather.temp}</p>
        <img src={weather.src}></img>
        <p>wind {weather.wind}m/s</p>
    </div>
)
}

export default ViewCountry