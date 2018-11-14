//import statements
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search'; 

//component imports 
import SearchBar from './components/search_bar'; 
import VideoList from './components/video_list'; 
import VideoDetail from './components/video_detail'; 
import API_KEY from './components/api_key'; 
 


class App extends Component {
    //constructor 
    constructor(props) {
        super(props); 

        this.state = { 
            videos: [], 
            selectedVideo: null 
        }; 

        this.videoSearch('surfboards');
    }

    //searching youtube api for a video
    videoSearch(term) {
          //youtube api search method
          YTSearch({key: API_KEY, term:term}, (videos) => {
            this.setState({ 
                videos: videos, 
                selectedVideo: videos[0]
            }); 
        }); 
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo} />
                {/* passing property onVideoSelect to VideoList */}
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                    videos={this.state.videos} />
            </div>
        ); 
    }
}


//take this components generated html and put it on the page
ReactDOM.render(<App />, document.querySelector('.container')); 