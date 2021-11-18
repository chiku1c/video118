import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props){
        super(props)

            this.state={
                parentNmae:"hello"
            }
            this.greetParent=this.greetParent.bind(this)
        
    }
        greetParent(){
            alert(`you are boys ${this.state.parentNmae}`)
        }
    render() {
        return (
            <div>
                <ChildComponent  greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
