import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <List quantity={100} />
      </div>
    );
  }
}

export default App;
