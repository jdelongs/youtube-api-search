//import statements
import React from 'react';
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search'; 

//component imports 
import SearchBar from './components/search_bar'; 
import API_KEY from './components/api_key'; 
 
YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
    console.log(data); 
}); 

//create a new component that generates html
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    ); 
}


//take this components generated html and put it on the page
ReactDOM.render(<App />, document.querySelector('.container')); 