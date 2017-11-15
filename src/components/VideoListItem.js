import React from 'react';

const VideoListItem = (props) => {
    return (
      <li className="video-list" onClick={() => props.onVideoClick(props.video)}>
        <div className="video-list-items">
          <div className="item-one">
            <img src={props.video.snippet.thumbnails.default.url}/>
          </div>
          <div>
            <div className="item-two">
              {props.video.snippet.title}
            </div>
          </div>
        </div>
      </li>
    );
}

export default VideoListItem;