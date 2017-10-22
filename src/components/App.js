import React, { Component } from 'react';
import '../styles/App.scss';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import YTSearch from 'youtube-api-search';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({
      key: process.env.REACT_APP_YOUTUBE_KEY,
      searchValue: 'testdata'
    },
    (videos) => {
      this.setState({
        videos
      });
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
        <VideoDetail/>
      </div>
    );
  }
}

export default App;
