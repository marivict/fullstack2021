import React from 'react'

const Notification = ({message, classStyle}) => {

    if(message === null){
        return null
    }

    return(
        <div className={classStyle}>
            <h3>{message}</h3>
        </div>
    )
}

export default Notification