import React from 'react'; 

const VideoListItem = ({video, onVideoSelect}) => {  
    const imgUrl = video.snippet.thumbnails.default.url; 
    return (
        //on click event calls the onVideoSelect function located in index.js
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    ); 
}; 

export default VideoListItem; 