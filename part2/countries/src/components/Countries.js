import React from 'react'
import ViewCountry from './ViewCountry'
import Button from './Button'

const Countries = ({countries, filter}) => {
  const f = filter.toLowerCase()

  countries = countries.filter((country) => country.name.common.toLowerCase().includes(f))
  if(countries.length >=11)
  {
    return(
      <div>
        <p>Too many matches, specify other filter</p>
      </div>
    )
  }
  else{
    if(countries.length === 1)
    {
      return (
        <div>
          <ViewCountry country ={countries[0]}/>
        </div>
      )
    }
    return (
      <div>
      {countries.map(country =>
        <Button key={country.name.common} country={country} />
      )}
      </div>
    )
  }
}

export default Countries