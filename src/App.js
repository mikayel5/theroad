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
    obcejtID:1,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    autor: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 2,
    },
    
]

// function isSearched(searchTherm){
//   return function(item){
//     return item.title.toLowerCase().includes(searchTherm.toLowerCase());
//   }
// }

const isSearched = searchTherm => item =>item.title.toLowerCase().includes(searchTherm.toLowerCase())

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
    const {searchTherm, list}=this.state
    return(
    <div className="App">
       <Search
        value={searchTherm}
        onChange = {this.onSearchChange}
      
      >
        Search
        </Search>
      <Table
      list= {list}
      pattern= {searchTherm}
      onDismiss = {this.onDismiss}
      
      /> 
    </div>
    )
  }
}

class Button extends Component{
  render(){
const {onClick, className="",children}=this.props;

    return(
      <button
        onClick = {onClick}
        className = {className}
        type= "button"
      >
        {children}
      </button>
    )
  }
}


class Search extends Component{
  render (){
      const {value, onChange,children} = this.props
      return (
          <from>
              {children}<input
                  type = "text"
                  value = {value}
                  onChange = {onChange}
              />
          </from>
      )
  }
}

class Table extends Component {
 
  render (){
      const {list , pattern, onDismiss} = this.props
  
  return (
      <div>
         {list.filter(isSearched(pattern)).map(item =>
       <div key = {item.obcejtID}>
        <span><a href={item.url}>{item.title}</a></span>
        <span>{item.autor}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>
          <Button onClick={()=>onDismiss(item.obcejtID)}
          className="LAv button"
          >
            Reset
          </Button>
        </span>
       </div>
      )}
          
      </div>
  )
  }
}
export default App;
