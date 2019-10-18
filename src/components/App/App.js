import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Search from '../Search/Search';
import './App.css';
import Rent from '../Rent/Rent';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          <Route 
            exact
            path="/"
            component={Search}
        />

        <Route
          exact
          path="/rent"
          component={Rent}
        />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
