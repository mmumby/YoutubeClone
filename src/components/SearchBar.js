import React, { Component } from 'react';
import Header from './Header';


class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state ={
      searchValue: '',
    };
  }

  render() {
    return (
      <div className="navbar">
        <Header />
        <input
        value={this.state.searchValue}
        onChange={event => this.handleChange(event.target.value)}
        className="search-input"
        placeholder="Search for video and press Enter"/>
      </div>
    );
  }

  handleChange(searchValue){
    this.setState({searchValue});
    this.props.onVideoSearch(searchValue);
  }
}

export default SearchBar;