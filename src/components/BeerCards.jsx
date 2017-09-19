import React, { Component } from 'react';
import Modal from 'react-modal';
import ModalContent from './ModalContent';
// import BeerCard from './BeerCard';
import './../stylesheets/App.css'

const htmlDocument = document.querySelector('html');

class BeerCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            tagline: '',
            image_url: '',
            modalIsOpen: false,
            currentBeer: null,
            nextBeer: null,
            prevBeer: null,
            twoAheadBeer: null
        }

    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.timeOuter()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)
            && this.props.beers.length
            && !this.props.isLoading
        ) {
            this.props.onPaginatedSearch();
        }
    }

    timeOuter = () => {
        console.log('before 2 sek', this.state)
        setTimeout( ()=> {console.log('after 2 sek ', this.state)}, 2000 )
    }
    
    openModal = (e, current, prev, next, twoAhead) => {
        this.setState({
            modalIsOpen: true,
            id: '',
            currentBeer: current,
            nextBeer: next,
            prevBeer: prev,
            twoAheadBeer: twoAhead
        });
        e.preventDefault();
        e.stopPropagation();
        htmlDocument.classList.add('no-scroll')
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
        htmlDocument.classList.remove('no-scroll')
    }

    render() {
        let beers = {};

        if (this.props.beers !== null) {
            beers = this.props.beers;
            return (
                <div>
                    <div className="gallery-container">
                    {beers.map((beer, key) => {
                        
                        return (
                            <div
                                className="beer-card"
                                id={beer.id}
                                onClick={(e) => this.openModal(e, beer, beers[key - 1], beers[ key + 1] , beers[ key + 2])}
                                key={key}
                            >
                                <img className="beer-card__img" src={beer.image_url} />
                                <div className="beer-card__title">{beer.name}</div>
                                <div className="beer-card__subtitle">{beer.tagline}</div>
                            </div>
                        )
                    })}
                    </div>
                    <div className="row row--loader-container">
                        {this.props.isLoading && <img src={require("./../assets/loader.gif")}/>}
                    </div>
                    <Modal
                        className="modal"
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        contentLabel="Beer Detail Modal"
                    >
                    <button onClick={this.closeModal}>close</button>
                        <ModalContent
                            currentBeer={this.state.currentBeer}
                            nextBeer={this.state.prevBeer}
                            prevBeer={this.state.nextBeer}
                            twoAheadBeer={this.state.twoAheadBeer}
                        />
                    </Modal>
                </div>
                
            )
        } else {
            return null
        }
    }
}

export default BeerCards;