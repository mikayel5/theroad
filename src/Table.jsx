import { Component } from "react";

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


  const isSearched = searchTherm => item =>item.title.toLowerCase().includes(searchTherm.toLowerCase())

class Table extends Component {
    onDismiss(id){
        const isNotId = item => item.obcejtID !== id;
        const updatedList = this.state.list.filter(isNotId);
        this.setState({list:updatedList});
      }
    render (){
        const {list , pattern, onDismiss} = this.props
    
    return (
        <div>
            {list.filter(isSearched(pattern)).map(item =>
                <div key={item.obcejtID}>
                    <span><a href={item.url}>{item.tittle}</a></span>
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>
                    <span>
                        <button
                            onClick ={()=> onDismiss(item.obcejtID)}
                            type= "button"
                        >
                            Reset
                        </button>
                    </span>


                </div>
            )}
        </div>
    )
    }
}


export default Table