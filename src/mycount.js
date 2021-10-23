import React from 'react';

export default class Count extends React.Component{

    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    increaseCounter=()=>{
        let newVal = this.state.count+1;
        this.setState({count:newVal})
    }


    render(){
        return <div>
            <div>Count : {this.state.count}</div>
            <button onClick={this.increaseCounter}>Increase</button>
            </div>
    }
}