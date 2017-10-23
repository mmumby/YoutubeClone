import React, { Component } from 'react';


class VideoListItem extends Component {
  render() {
    return (
      <li onClick={() => this.props.onVideoClick(this.props.video)}>
        <div>
          <div>
            <img src={this.props.video.snippet.thumbnails.default.url}/>
          </div>
          <div>
            <div>
              {this.props.video.snippet.title}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;