import React from 'react'

const Header = (props) => {
    return(
        <div>
            <h3>{props.course.name}</h3>
        </div>
    )
}

export default Header