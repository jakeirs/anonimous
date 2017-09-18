import React, { Component } from 'react';
import Modal from 'react-modal';
import ModalContent from './ModalContent';
import './../stylesheets/App.css'

class BeerCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            tagline: '',
            image_url: '',
            modalIsOpen: false
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    openModal(event) {
        this.setState({
            modalIsOpen: true,
            id: ''
        });

        event.preventDefault();
        event.stopPropagation();
        console.log(this);
    }

    closeModal() {
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
                        {/* console.log(beer.id) */}
                        
                        return (
                            <div
                                className="beer-card"
                                id={beer.id}
                                onClick={this.openModal}
                                key={key}
                            >
                                <img className="beer-card__img" src={beer.image_url} />
                                <div className="beer-card__title">{beer.name}</div>
                                <div className="beer-card__subtitle">{beer.tagline}</div>
                            </div>
                        )
                    })}
                    </div>
                    <Modal
                        className="modal"
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        contentLabel="Example Modal"
                    >
                    <button onClick={this.closeModal}>close</button>
                        <ModalContent/>
                    </Modal>
                </div>
                
            )
        } else {
            return false

        }
    }
}

export default BeerCards;