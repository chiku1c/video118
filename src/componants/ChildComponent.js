import React from 'react'

 function ChildComponent(props) {
    return (
        <div>
           <button onClick={()=>props.greetHandler('child')}>GreetComponants</button> 
        </div>
    )
}
export default ChildComponent 