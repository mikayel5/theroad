import "./App.css";
import { Component } from "react";

const DEFAULT_QUERY = "redux";

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";

// function isSearched(searchTherm){
//   return function(item){
//     return item.title.toLowerCase().includes(searchTherm.toLowerCase());
//   }
// }
//նույն բանն ա
// const isSearched = (searchTherm) => (item) =>
//   item.title.toLowerCase().includes(searchTherm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchTherm: DEFAULT_QUERY,
    };

    this.setSearchTopStore = this.setSearchTopStore.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  setSearchTopStore(result) {
    this.setState({ result });
  }

  fetchSearchTopStories(searchTherm) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTherm}`)
      .then((response) => response.json())
      .then((result) => this.setSearchTopStore(result))
      .catch((error) => error);
  }
  componentDidMount() {
    const { searchTherm } = this.state;
    this.fetchSearchTopStories(searchTherm);
  }
  onSearchSubmit(event) {
    const { searchTherm } = this.state;
    this.fetchSearchTopStories(searchTherm);
    event.preventDefault();
  }

  // onDismiss(id){
  //   const updateList = this.state.list.filter(function isNotid(item){
  //     return item.obcejtID !== id;
  //   })

  //   this.setState({list:updateList})
  //   // const updateList = this.state.list.filter(isNotid)
  // }

  onDismiss(id) {
    const isNotId = (item) => item.obcejtID !== id;
    const updatedHits = this.state.result.hits.filter(isNotId);
    this.setState({
      result: { ...this.state.result, hits: updatedHits },
    });
  }

  onSearchChange(event) {
    this.setState({ searchTherm: event.target.value });
  }

  render() {
    const { searchTherm, result } = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTherm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        {result && <Table list={result.hits} onDismiss={this.onDismiss} />}
      </div>
    );
  }
}

const Search = ({ value, onChange, onSubmit, children }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={value} onChange={onChange} />
    <button type="submit">{children}</button>
  </form>
);

class Button extends Component {
  render() {
    const { onClick, className = "", children } = this.props;

    return (
      <button onClick={onClick} className={className} type="button">
        {children}
      </button>
    );
  }
}

const Table = ({ list, onDismiss }) => (
  <div className="table">
    {list.map((item) => (
      <div key={item.obcejtID} className="table-row">
        <span style={{ width: "40%" }}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ width: "30%" }}>{item.autor}</span>
        <span style={{ width: "10%" }}>{item.num_comments}</span>
        <span style={{ width: "10%" }}>{item.points}</span>
        <span style={{ width: "10%" }}>
          <Button
            onClick={() => onDismiss(item.obcejtID)}
            className="button-inline"
          >
            Reset
          </Button>
        </span>
      </div>
    ))}
  </div>
);

export default App;
