import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(){
    super()
    this.state ={
      searchValue: ''
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
          className="search-input"
          placeholder="Search..."
          onChange={event => this.onInputChange(event.target.value)} />
        </div>
      </div>
    );
  }

  onInputChange(searchValue){
    console.log('onInputChange called..')
    this.setState({
      searchValue: searchValue
    });
    this.props.onSearchValueChange(searchValue);
  }
}

export default SearchBar;