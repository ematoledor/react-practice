import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a react app.</h1>
       <p>IT is working!</p>
       <Person />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work?'));
  }
}

export default App;
