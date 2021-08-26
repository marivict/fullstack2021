import React from 'react'
import Name from './Name'

const Persons = ({getNames, deletePhone}) => {
    return(
        <>
             {getNames.map((name, index) => <Name name={name} key={index} deletePhone={deletePhone}/>)}
        </>
    )
}

export default Persons