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
        greetParent(childName){
            alert(`you are boys ${this.state.parentNmae} from ${childName}`)
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
