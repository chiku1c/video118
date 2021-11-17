import React from 'react'

function Greet(props) {
    console.log(props)
    return (
        <div>
            <h1> Hello Mr {props.name}</h1>
            
        </div>
    )
}

export default Greet
