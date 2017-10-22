import React, { Component } from 'react';
import '../styles/App.scss';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import VideoListItem from './VideoListItem';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VideoListItem/>
        <VideoList/>
        <VideoDetail/>
      </div>
    );
  }
}

export default App;
