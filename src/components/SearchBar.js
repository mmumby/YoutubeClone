import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state ={
      searchValue: '',
    };
  }

  render() {
    return (
      <div className="container-one">
        <div className="header-logo">
          <i id="youtube-icon" className="fa fa-3x fa-youtube" aria-hidden="true"></i>
        </div>
        <div className="header-search">
          <input
          value={this.state.searchValue}
          onChange={event => this.onInputChange(event.target.value)}
          className="search-input"
          placeholder="Search for video and press Enter"/>
        </div>
      </div>
    );
  }

  onInputChange(searchValue){
    this.setState({searchValue});
    this.props.onSearchTermChange(searchValue);
  }
}

export default SearchBar;