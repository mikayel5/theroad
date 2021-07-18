import logo from './logo.svg';
import './App.css';


const list =[
  {
    title : 'Reassct',
    url : 'https://reactjs.org',
    author: 'Jordan Mike',
    num_comments:3,
    points: 4,
    objectID:0,
  },
  {
    title: "Rezzdux",
    url : 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments:2,
    points: 5,
    objectID:1,
  }
]


function App() {
  const hell = 'welcome to asdsad road'
  return (
    <div className="App">
    {list.map(function(item){
      return( 
      <div key={item.objectID}>
        <span> <a href={item.url}>{item.title}</a></span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
      );
    })}
    </div>
  );
}

export default App;
