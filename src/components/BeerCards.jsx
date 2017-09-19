import React, { Component } from 'react';
import Modal from 'react-modal';
import ModalContent from './ModalContent';
// import BeerCard from './BeerCard';
import './../stylesheets/App.css'

class BeerCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            tagline: '',
            image_url: '',
            modalIsOpen: false,
            currentBeer: null
        }

    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
    
    openModal = (e, data) => {
        this.setState({
            modalIsOpen: true,
            id: ''
        });
        console.log(data)
        // event.preventDefault();
        // event.stopPropagation();
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    render() {
        let beers = {
            id: '',
            name: 'asd',
            image_url: '',
            tagline: ''
        };

        if (this.props.beers !== null) {
            beers = this.props.beers;
            return (
                <div>
                    <div className="gallery-container">
                    {beers.map((beer, key) => {
                        
                        return (
                            <div
                                className="beer-card"
                                id={beer}
                                onClick={(e) => this.openModal(e, beer)}
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
                        currentBeer={this.state.currentBeer}
                    >
                    <button onClick={this.closeModal}>close</button>
                        <ModalContent/>
                    </Modal>
                </div>
                
            )
        } else {
            return null

        }
    }
}

export default BeerCards;