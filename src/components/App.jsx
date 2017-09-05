import React, { Component } from 'react';
import './../stylesheets/App.css'
import BeerCard from "./BeerCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemPerPage: 6,
      // dodaj +1 przy infinitive scroll
      paged: 1,
      beer: null
    }
  }

  componentWillMount() {
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
      const beer = json[0];
      this.setState( { beer } )

      console.log(beer.name)
    } )
  }



  render() {
    // this.init();
    return (
      <div>
        <div className="row">
          <div className="large-header"> 
            BeerGuru
          </div>
          <div className="gallery-container">
            <BeerCard
              beer={this.state.beer}
            />
          </div>  
        </div>
      </div>
    )
  }
}

export default App;