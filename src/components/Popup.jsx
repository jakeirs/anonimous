import React, {Component} from 'react';

class Popup extends Component {


  render() {
    return (
      <div className="popup">
        <div className="popup__upper-part">
          <img className="popup__img"
            src=""
          />
          <div className="popup__datails-wrapper">
            <div className="popup__title">
              Trashy Blonde
            </div>
            <div className="popup__subtitle">
              You know you shouldn't
            </div>
            <ul className="popup__detail-numbers">
              <li>IBU</li>
              <li>ABV</li>
              <li>EBC</li>
            </ul>
            <div className="popup__description"> 
              
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
        <div className="popup__lower-part">
          <div className="popup__subtitle--sugestions">
            You might also like:
          </div>
          <div className="popup__suggestion-wraper">
            <div className="popup__suggestion__item">
              <img/>
              <div className="popup__suggestion__title">
                Avery Brown Dredge
              </div>
              <div className="popup__suggestion__title">
                Electric India
              </div>
              <div className="popup__suggestion__title">
                AB:12
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Popup;