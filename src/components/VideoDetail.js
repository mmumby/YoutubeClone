import React, { Component } from 'react';


class VideoDetail extends Component {

  render() {
    if (!this.props.video) {
      return <div> Loading... </div>
    }

    const video = this.props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${video}`;

    return (
      <div>
        <div>
          <iframe src={url}></iframe>
        </div>
        <div>
          <div>{this.props.video.snippet.title}</div>
          <div>{this.props.video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;