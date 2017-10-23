import React, { Component } from 'react';
import VideoListItem from './VideoListItem';



class VideoList extends Component {
  render() {
    return (
      <ul>
        {this.props.videos.map((video) =>
        <VideoListItem key={video.etag} video={video}/>
        )}
      </ul>
    );
  }
}

export default VideoList;