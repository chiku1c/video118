import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state={
            massage:"Hello EventBind"
        }
    }
    clickHandler=()=>{
         this.setState({
             massage:"Good Bye Event Bind"
         })
         console.log(this)
    }

     
    render() {
        return (
            <div>
                <h1>{this.state.massage}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>EventBind</button> */}
                <button onClick={()=>this.clickHandler}>EventBind</button>
            </div>
        )
    }
}

export default EventBind
