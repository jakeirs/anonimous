import React, { Component } from 'react';
import './../stylesheets/App.css'

class BeerCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tagline: '',
            image_url: ''
        }
    }

    render() {
        let beers = {
            name: 'asd',
            image_url: '',
            tagline: ''
        };

        if ( this.props.beers !== null ) {
            beers = this.props.beers;
            return (
                <div className="gallery-container">
                    {beers.map( (beer, key) => {
                        console.log(beer)
                        return (
                            <div
                                className="beer-card"
                                key={key}
                            >
                                <img className="beer-card__img" src={beer.image_url}/>
                                <div className="beer-card__title">{beer.name}</div>
                                <div className="beer-card__subtitle">{beer.tagline}</div>
                            </div>
                        )
                    } ) }

                </div>
            )
        } else {
            return false

        }
    }
}

export default BeerCards;