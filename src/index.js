//import statements
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search'; 

//component imports 
import SearchBar from './components/search_bar'; 
import API_KEY from './components/api_key'; 
 

//create a new component that generates html
class App extends Component {
    constructor(props) {
        super(props); 

        this.state = { videos: [] }; 

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos }); 
        }); 
    }

    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        ); 
    }
}


//take this components generated html and put it on the page
ReactDOM.render(<App />, document.querySelector('.container')); 