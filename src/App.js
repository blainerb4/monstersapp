import React, {Component} from 'react';
import {CardList} from './components/card-list/CardList';
import {SearchBox} from './components/search-box/SearchBox'
import './App.css';

class App extends Component {
  constructor (){
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters: users}))
  }


  //calls whatever blok of code we write inside
  //fetch returns us a promise
  // response.json() method on the response format
  //filtering out data from raw data=destructuring pull properties off object and set them to constants we put in {}
  //pulling the properties off of state
  // using sanme propety name we want to set as constant
  // const monsters = this.state.monsters & const searchField = this.state.searchField === const { monsters, searchField } = this.state
  // dont want search to be case sensitive (toLowerCase)
  //includes --checks if the string value we pass inside the include is in the string its being called upon
  // includes wil return true or false whether are not the monsters.name string is included with the string we are passing n
  
  handleChange = e => {
    this.setState({searchField: e.target.value})
  }
  //wrring our own methods on class components
  //may want to use the code in multiple places so its good to rewrite it and create own method
  // defines the arrow function based on the code weve given it 
  // define 'this ' to the place arrow function was defined in the first place (context is the app component)
  // lexcial scoping - bind the this context to the place where it was defined inthe first place
  render (){
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
        <h1>Monsters Rule</h1>
        <SearchBox 
        placeholder='search monsters' 
        handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}
//props are the paramters we pass into component eg cardlist
//this is where we write in props
// in between components are the children 
//<CardList monsters={this.state.monsters}/> not we passing filtered monsters
// <input type='search' placeholder='search monsters' onChange = {e=> this.setState({searchField: e.target.value})}/>
//        handleChange = {e=> this.setState({searchField: e.target.value})}

export default App;
