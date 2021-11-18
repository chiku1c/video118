import React from 'react'

export default function ContextParent() {
     return (
        <div>
            <button onClick={()=>setcount(()=>+1)}>Count</button>
        </div>
    )
}
