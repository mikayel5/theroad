import { Component } from "react";



class Counter extends Component{
    state  = {
        counter: 0,
    };

    onIncrement = () =>{
        this.setState(state =>({counter:state.counter + 1}));
    }
    onDecrment = () =>{
        this.setState(state =>({counter:state.counter - 1}));
    }

    render(){
        return(
            <div>
             <p>{this.state.counter}</p>
                 <button
                  onClick ={this.onIncrement}
                  type = 'button'
                 >
                   Increment 
                </button>
                <button
                  onClick ={this.onDecrment}
                  type = 'button'
                 >
                   Decrement 
                </button>
            </div>
        )
    }
}



export default Counter