import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Random Giphy API</h1>
        </header>
        
        <p>Results go here</p>
      </div>
    );
  }
}

export default App;
