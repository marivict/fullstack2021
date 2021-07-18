import React from 'react'
import Name from './Name'

const Persons = ({getNames}) => {
    return(
        <>
             {getNames.map((name, index) => <Name name={name} key={index} />)}
        </>
    )
}

export default Persons