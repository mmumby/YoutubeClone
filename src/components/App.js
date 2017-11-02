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

    this.videoSearch('testdata');
  }

  videoSearch(searchValue) {
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
      <div>
        <div className="container-one">
          <SearchBar onSearchTermChange={searchValue => this.videoSearch(searchValue)}/>
        </div>
        <div className="container-two">
          <VideoDetail
            video={this.state.selectedVideo}/>
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
        </div>
      </div>
    );
  }
}

export default App;
