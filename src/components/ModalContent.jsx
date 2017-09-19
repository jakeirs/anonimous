import React, { Component } from 'react';
import Modal from 'react-modal';
import './../stylesheets/App.css'

class ModalContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        currentBeer: this.props.currentBeer,
        prevBeer: this.props.prevBeer,
        nextBeer: this.props.nextBeer,
        twoAheadBeer: this.props.twoAheadBeer
    }
  }


  onSuggectionClick = (e, clickedBeer) => {
    this.setState({
        currentBeer: clickedBeer
    })
  }

  render() {
      const { currentBeer, prevBeer, nextBeer, twoAheadBeer } = this.state;
      console.log(currentBeer, prevBeer, nextBeer, twoAheadBeer)
    return (
      <div className="modal">
        <div className="modal__upper-part">
          <div className="modal__img-container">
            <img className="modal__img"
              src={currentBeer.image_url}
            />
          </div>
          <div className="modal__datails-wrapper">
            <div className="modal__title">
                {currentBeer.name}
            </div>
            <div className="modal__subtitle">
                {currentBeer.tagline}
            </div>
            <ul className="modal__detail-numbers">
              <li>IBU: <span className="modal__details-values">{currentBeer.ibu}</span></li>
              <li>AB: <span className="modal__details-values">{currentBeer.abv}</span></li>
              <li>EBC: <span className="modal__details-values">{currentBeer.ebc}</span></li>
            </ul>
            <div className="modal__description"> 
                {currentBeer.description}
            </div>
          </div>
        </div>
        <div className="modal__lower-part">
          <div className="modal__subtitle--suggestions">
            You might also like:
          </div>
          <div className="modal__suggestion-wraper">
            <div className="modal__suggestion__item"
               onClick={(e) => this.onSuggectionClick(e, prevBeer)}
            >
              <img className="modal__suggestion__img" src={prevBeer.image_url}/>
              <div className="modal__suggestion__title">
                  {prevBeer.name}
              </div>
            </div>
            <div className="modal__suggestion__item"
              onClick={(e) => this.onSuggectionClick(e, nextBeer)}
            >
              <img className="modal__suggestion__img" src={nextBeer.image_url}/>
              <div className="modal__suggestion__title">
                  {nextBeer.name}
              </div>
            </div>
            <div className="modal__suggestion__item"
               onClick={(e) => this.onSuggectionClick(e, twoAheadBeer)}
            >
              <img className="modal__suggestion__img" src={twoAheadBeer.image_url}/>
              <div className="modal__suggestion__title">
                  {twoAheadBeer.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalContent;