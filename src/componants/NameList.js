import React from 'react'

function NameList() {
    const name=["sikandar","chauhan","yogita","chauhan"]
    return (
        <div>
            {
                name.map(name=><h2>{name}</h2>)
            }
        </div>
    )
}

export default NameList
