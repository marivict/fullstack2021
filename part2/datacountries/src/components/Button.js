import React, {useState} from 'react'

const Button = ({parentCallback}) => {
    const [show, setShow] = useState(false)
    const showCountry = () => {
        setShow(true)
    }

    return(
        <button onClick={() => {const newValue = show; showCountry(); parentCallback(newValue)}}>Show</button>
    )
}

export default Button