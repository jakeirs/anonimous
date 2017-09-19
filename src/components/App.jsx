import React, {Component} from 'react';
import './../stylesheets/App.css'
import BeerCards from "./BeerCards";

const applyUpdateResult = (result, page) => (prevState) => ({
    beers: [...(prevState.beers), ...result],
    page: page + 1,
    isLoading: false,
});

const applySetResult = (result, page) => (prevState) => ({
    beers: result,
    page: page + 1,
    isLoading: false,
});

// const BASE_URL = 'https://api.punkapi.com/v2/beers';
const getFetchUrl = (page) => {
    return `https://api.punkapi.com/v2/beers?page=${page}&per_page=6`;
}


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beers: [],
            page: 1,
            isLoading: false
        }
    }

    componentDidMount() {
        this.onInit();
    }

    onInit = () => {
        this.fetchBeers( 1 );
    }

    onPaginatedSearch = (e) =>
        this.fetchBeers(this.state.page);


    fetchBeers = ( page ) => {
        this.setState({isLoading: true});
        fetch(getFetchUrl(page))
            .then(response => response.json())
            .then(result => {
                this.onSetResult(result, page)
            });
    }

    onSetResult = (result, page) => {
        return page === 1
            ? this.setState(applySetResult(result, page))
            : this.setState(applyUpdateResult(result, page));
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="large-header">
                        Beer Guru
                    </div>
                    <BeerCards
                        beers={this.state.beers}
                        page={this.state.page}
                        onPaginatedSearch={this.onPaginatedSearch}
                        isLoading={this.state.isLoading}
                    />
                </div>
            </div>
        )
    }
}

export default App;