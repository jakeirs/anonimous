import React, { Component } from 'react';
import Modal from 'react-modal';
import './../stylesheets/App.css'

class ModalContent extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="modal">
        <div className="modal__upper-part">
          <div className="modal__img-container">
            <img className="modal__img"
              src="https://images.punkapi.com/v2/2.png"
            />
          </div>
          <div className="modal__datails-wrapper">
            <div className="modal__title">
              Trashy Blonde
            </div>
            <div className="modal__subtitle">
              You know you shouldn't
            </div>
            <ul className="modal__detail-numbers">
              <li>IBU</li>
              <li>ABV</li>
              <li>EBC</li>
            </ul>
            <div className="modal__description"> 
              
              Play	
              -1:20
              Additional Visual SettingsEnter Watch And ScrollEnter Fullscreen	Unmute

              Szymon Wojciechowski
              256 Comments751 Shares273K Views
              2.3K 2.3K
              Like
              Show more reactions
              Comment
              Share

              Business Insider
              6 hrs · 
              Hurricane Irma could rewrite history.

              Meteorologists have never seen a storm like Irma
              The storm appears to have exceeded the maximum theoretical strength for a hurricane in its environment.
              BUSINESSINSIDER.COM

              Szymon Wojciechowski
              30 Comments268 Shares
              830 830
              Like
              Show more reactions
              Comment
              Share

              Dan Bilzerian
              September 7 at 9:01pm · 
            </div>
          </div>
        </div>
        <div className="modal__lower-part">
          <div className="modal__subtitle--suggestions">
            You might also like:
          </div>
          <div className="modal__suggestion-wraper">
            <div className="modal__suggestion__item">
              <img/>
              <div className="modal__suggestion__title">
                Avery Brown Dredge
              </div>
              <div className="modal__suggestion__title">
                Electric India
              </div>
              <div className="modal__suggestion__title">
                AB:12
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalContent;