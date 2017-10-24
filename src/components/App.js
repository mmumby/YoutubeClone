import React, { Component } from 'react';
import '../styles/App.css';
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

    this.handleVideoSearch('testdata');
  }

  handleVideoSearch(searchValue) {
    YTSearch({
      key: process.env.REACT_APP_YOUTUBE_KEY,
      searchValue: searchValue
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
      <div className="container">
        <SearchBar onVideoSearch={searchValue => this.handleVideoSearch(searchValue)}/>
        <VideoDetail
          video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    );
  }
}

export default App;
