import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 23 },
      { name: 'Steph', age: 38 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked.');
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a react app.</h1>
       <p>IT is working!</p>
       <button onClick={this.switchNameHandler}> Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My hobbies: Racing </Person>
       <Person name= {this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work?'));
  }
}

export default App;
 