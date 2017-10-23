import React, { Component } from 'react';
import '../styles/App.scss';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import YTSearch from 'youtube-api-search';
import VideoDetail from './VideoDetail';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({
      key: process.env.REACT_APP_YOUTUBE_KEY,
      searchValue: 'testdata'
    },
    (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
