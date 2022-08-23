import React from 'react'
import ViewCountry from './ViewCountry'
import {useState} from 'react'
const Button=({country})=>{

    const [isShown, setIsShown] =useState(false)
    
    const handelOnClick = () => {
        setIsShown(isShown => !isShown)
    }

    return (
    
            <div>
              {country.name.common} <button onClick={handelOnClick}>show</button>
              {isShown && (
                <div>
                    <ViewCountry country={country} />
                </div>
              )}
            </div>
    )
}
export default Button