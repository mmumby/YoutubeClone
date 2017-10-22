import React, { Component } from 'react';


class VideoListItem extends Component {
  render() {
    return (
      <li>
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