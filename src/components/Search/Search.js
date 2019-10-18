import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import './Search.css';

const styles = theme => ({
    rootDiv: {
        margin: '0px 100px 0px 100px'
    }
})

class App extends Component {

    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }//end handleChange

    handleClick = () => {
        console.log('clicked')
        console.log(this.state.search)
        axios.get('/game'
        , {
            params: {
                game: this.state.search
            }
        }
        ).then(response => {
            console.log(response)
            this.props.dispatch({
                type: 'SET_GAME',
                payload: response.data.response.results.game
            })
        }).catch(error => {
            console.log(error)
        })
    }//end handleClick

    handleRentClick = (id) => {
        console.log('clicked')
        console.log('the id is', id)
        axios.get('/game/rented', {
            params: {
                rent: id
            }
        }).then(response => {
            console.log(response)
            this.props.dispatch({
                type: 'SET_RENTED',
                payload: response.data.response.results
            })
        }).catch (error => {
            console.log(error)
        })
    }//end handleRentClick

    goToRented = () => {
        console.log('clicked')
        this.props.history.push('/rent')
    }//end goToRented

    render() {
        console.log(this.state.search)
        return (
            <div>
                <header className="App-header">
                    <h1>Giant Bomb API Search</h1>
                </header>
                <div className={this.props.classes.rootDiv}>
                    <Grid containter spacing={3}>
                        <p>Results go here</p>
                        <p>Search for a game</p>
                        <input placeholer="search for game" type="text" onChange={this.handleChange} />
                        <button onClick={this.handleClick}>Search</button>
                        {/* {JSON.stringify(this.props.storeInstance.search)} */}
                        {
                            this.props.storeInstance.search.map((ga) => {
                                return <><h1>{ga.name._cdata}</h1> <img src={ga.image.thumb_url._cdata} /> <button onClick={() =>this.handleRentClick(ga.guid._cdata)}>Rent</button></>
                            })
                        }
                        <button onClick={this.goToRented}>View Rented Games</button>
                    </Grid>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (storeInstance) => {
    return {
        storeInstance
    }
}

export default connect(mapStateToProps)(withStyles(styles)(App));
