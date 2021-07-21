import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Counter from './Counter';
import ExplainBindingsComponent from './ExplainBindingsComponent';

const list = [
  {
    title:'React',
    url:'sdfsf',
    autor: "Jordan Walke",
    num_comments:3,
    points: 5,
    obcejtID:0,
  }
]

class App extends Component{
  constructor(props){
    super(props);


    this.state = {
      list,
      searchTherm:''
    };
    this.onSearchChange = this.onSearchChange.bind(this)
    this.onDismiss = this.onDismiss.bind(this);
  };

  // onDismiss(id){
  //   const updateList = this.state.list.filter(function isNotid(item){
  //     return item.obcejtID !== id;
  //   })

  //   this.setState({list:updateList})
  //   // const updateList = this.state.list.filter(isNotid)
  // }

onDismiss(id){
  const isNotId = item => item.obcejtID !== id;
  const updatedList = this.state.list.filter(isNotId);
  this.setState({list:updatedList});
}

onSearchChange(event){
  this.setState({searchTherm: event.target.value})
}

  render (){
    return(
    <div className="App">
      <form>
        <input type= "text"
          onChange={this.onSearchChange}
        />
      </form>
      {this.state.list.map(item =>
       <div key = {item.obcejtID}>
        <span><a href={item.url}>{item.title}</a></span>
        <span>{item.autor}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>
          <button 
            onClick={()=> this.onDismiss(item.obcejtID)}
            type = "button"
          >
            Reset
          </button>

          <ExplainBindingsComponent/>
        </span>
       </div>
      )}
    </div>
    )
  }
}
export default App;
