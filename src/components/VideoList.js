import React, { Component } from 'react';
import VideoListItem from './VideoListItem';



class VideoList extends Component {
  render() {
    return (
      <div className="video-list-container">
        <ul>
          {this.props.videos.map((video) =>
          <VideoListItem
          onVideoClick={this.props.onVideoSelect.bind(this)}
          key={video.etag}
          video={video}/>
          )}
        </ul>
      </div>
    );
  }
}

export default VideoList;