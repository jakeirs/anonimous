import React, { Component } from 'react';
import './../stylesheets/App.css'
import BeerCards from "./BeerCards";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemPerPage: 6,
      // dodaj +1 przy infinitive scroll
      paged: 1,
      beers: null
    }
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const BASE_URL = 'https://api.punkapi.com/v2/beers';
    let FETCH_URL = `${BASE_URL}?page=${this.state.paged}&per_page=${this.state.itemPerPage}` ;

    fetch( FETCH_URL, {
      method: 'GET'
    } ).then( response => {
      
      return response.json();
      
    } ).then( json => {
      const beers = json;
      this.setState( { beers } )
      // console.log('array', beers)
    } )
  }



  render() {
    // wywołanie tej funkcji tutaj powoduje zapętlenie, ponieważ zmieniam tutaj stan!!! this.setState( )
    // this.init();
      let beers = {
          id: '',
          name: 'asd',
          image_url: '',
          tagline: ''
      };

      beers = this.state.beers;

    return (
      <div>
        <div className="row">
          <div className="large-header"> 
            BeerGuru
          </div>
            <BeerCards
              beers={beers}
            />
        </div>
      </div>
    )
  }
}

export default App;