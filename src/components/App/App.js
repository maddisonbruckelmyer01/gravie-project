import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {connect} from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount = () =>{
    this.getGiphy();
  }

  getGiphy = () => {
    axios.get('/random').then(response => {
      console.log(response)
      this.props.dispatch({
        type: 'SET_RANDOM',
        payload: response.data
      })
    }).catch(error => {
      console.log(error)
    })
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Random Giphy API</h1>
        </header>
        <p>Results go here</p>
        <img src={this.props.storeInstance.random} />
        <button onClick={this.componentDidMount}>New Image</button>
   
      </div>
    );
  }
}
const mapStateToProps = (storeInstance) => {
  return {
    storeInstance
  }
}

export default connect(mapStateToProps)(App);
