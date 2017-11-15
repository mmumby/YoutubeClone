import React from 'react';
import VideoListItem from './VideoListItem';


const VideoList = (props) => {

  return (
      <div className="video-list-container">
        <ul>
          {props.videos.map((video) =>
          <VideoListItem
          onVideoClick={props.onVideoSelect.bind(this)}
          key={video.etag}
          video={video}/>
          )}
        </ul>
      </div>
    );
};

export default VideoList;
