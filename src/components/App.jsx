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
        // console.log(getFetchUrl(1))
        fetch(getFetchUrl(page))
            .then(response => response.json())
            .then(result => {
                console.log('fetch result', result)
                this.onSetResult(result, page)
            });
    }

    onSetResult = (result, page) => {
        return page === 1
            ? this.setState(applySetResult(result, page))
            : this.setState(applyUpdateResult(result, page));
    }

    timeOuter = () => {
        console.log('before 2 sek', this.state)
        setTimeout( ()=> {console.log('after 2 sek ', this.state.beers)}, 2000 )
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="large-header">
                        Infinitive scroll
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