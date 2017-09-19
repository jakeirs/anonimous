import React, { Component } from 'react';
import Modal from 'react-modal';
import './../stylesheets/App.css'

class ModalContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBeer: {}
    }
  }

  onSuggectionClick = (e, clickedBeer) => {
    console.log(clickedBeer)
    this.setState({
        currentBeer: clickedBeer
    })
  }

  render() {
      const { currentBeer, prevBeer, nextBeer, twoAheadBeer } = this.props;
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
              <li>IBU: <span className="modal__details-values">4.3</span></li>
              <li>AB: <span className="modal__details-values">4.3</span></li>
              <li>EBC: <span className="modal__details-values">4.3</span></li>
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
            <div className="modal__suggestion__item">
              <img className="modal__suggestion__img" src={nextBeer.image_url}/>
              <div className="modal__suggestion__title">
                  {nextBeer.name}
              </div>
            </div>
            <div className="modal__suggestion__item">
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