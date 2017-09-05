import React, { Component } from 'react';
import './../stylesheets/App.css'

class App extends Component {
  constructor(props) {
    super(props);
    // this.init();
  }

  init() {
    const BASE_URL = 'https://api.punkapi.com/v2/beers';
    // let FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';

    fetch( BASE_URL, {
      method: 'GET'
    } ).then( response => {
      
      return response.json();
      
    } ).then( json => {
      var size = 6;
      var items = json.slice(0, size).map(i => {
      console.log(i.image_url) ;
      });
    } )
  }

  render() {
    this.init();
    return (
      <div>
        <div className="row">
          <div className="large-header"> 
            BeerGuru
          </div>
          <div className="gallery-container">
            <div className="beer-card">
              <img className="beer-card__img" src="https://images.punkapi.com/v2/4.png"/>
              <div className="beer-card__title">Buzz</div>
              <div className="beer-card__subtitle">A real Bitter Experience</div>            
            </div>
            <div className="beer-card">
              <img className="beer-card__img" src="https://images.punkapi.com/v2/4.png"/>
              <div className="beer-card__title">Buzz</div>
              <div className="beer-card__subtitle">A real Bitter Experience</div>            
            </div>
            <div className="beer-card">
              <img className="beer-card__img" src="https://images.punkapi.com/v2/4.png"/>
              <div className="beer-card__title">Buzz</div>
              <div className="beer-card__subtitle">A real Bitter Experience</div>            
            </div>
            <div className="beer-card">
              <img className="beer-card__img" src="https://images.punkapi.com/v2/4.png"/>
              <div className="beer-card__title">Buzz</div>
              <div className="beer-card__subtitle">A real Bitter Experience</div>            
            </div>
            <div className="beer-card">
              <img className="beer-card__img" src="https://images.punkapi.com/v2/4.png"/>
              <div className="beer-card__title">Buzz</div>
              <div className="beer-card__subtitle">A real Bitter Experience</div>            
            </div>
            <div className="beer-card">
              <img className="beer-card__img" src="https://images.punkapi.com/v2/4.png"/>
              <div className="beer-card__title">Buzz</div>
              <div className="beer-card__subtitle">A real Bitter Experience</div>            
            </div>
          </div>  
        </div>
      </div>
    )
  }
}

export default App;