import CardList from "./component/card-list/card-list.component";
import { useState, useEffect } from "react";
import SearchBox from "./component/search-box/search-box.component";
import logo from './logo.svg';
import './App.css';

const App = ()=>{

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters ] = useState([]);
  const [filteredMonsters, setFilteredMonsters]= useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=>setMonsters(users));
    },[]);

    console.log(monsters);
  useEffect(()=>{
    const newFilteredMonsters=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField); 
    })

    setFilteredMonsters(newFilteredMonsters);
  },[monsters, searchField]);

  const onSearchChange = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox 
        className="search-box" 
        placeholder="search monsters" 
        onChangeHandler={onSearchChange}
      />
      <CardList monsters= {filteredMonsters}/>
    </div>
    )
}

// class App extends Component {
//   constructor(){
//     super();

//     this.state={
//       monsters:[],
//       searchField:''
//     }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users)=>this.setState(
//       ()=>{
//       return {monsters:users}
//     },
//     ()=>{
//       console.log(this.state)
//     }
//     ))
//   }

//   onSearchChange = 

//   render(){

//     const { monsters, searchField} = this.state;
//     const { onSearchChange } = this;
 
//     const filteredmonsters=this.state.monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//   );
// }
// }

export default App;