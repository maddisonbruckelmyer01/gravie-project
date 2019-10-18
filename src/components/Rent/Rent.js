import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Rent.css';
import axios from 'axios';

class Rent extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>Giant Bomb Rented Games</h1>
                </header>
                {
                    this.props.storeInstance.rented.map((game) => {
                        return <><h1>{game.name._cdata}</h1> <img src={game.image.thumb_url._cdata} /> </>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (storeInstance) => {
    return {
        storeInstance
    }
}

export default connect(mapStateToProps)(Rent);