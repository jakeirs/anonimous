import React, { Component } from 'react';
import './../stylesheets/App.css'

class BeerCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tagline: '',
            image_url: ''
        }
    }

    render() {
        let beer = {
            name: 'asd',
            image_url: '',
            tagline: ''
        };

        if ( this.props.beer !== null ) {
            beer = this.props.beer;
            console.log('beerName', beer.image_url)
        }

        return (
            <div className="beer-card">
                <img className="beer-card__img" src={beer.image_url}/>
                <div className="beer-card__title">{beer.name}</div>
                <div className="beer-card__subtitle">{beer.tagline}</div>
            </div>
        )
    }
}

export default BeerCard;