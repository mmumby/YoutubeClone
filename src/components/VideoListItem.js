import React, { Component } from 'react';


class VideoListItem extends Component {
  render() {
    return (
      <li className="video-list" onClick={() => this.props.onVideoClick(this.props.video)}>
        <div className="video-list-items">
          <div className="item-one">
            <img src={this.props.video.snippet.thumbnails.default.url}/>
          </div>
          <div>
            <div className="item-two">
              {this.props.video.snippet.title}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;