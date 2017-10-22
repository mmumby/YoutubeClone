import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(){
    super()
    this.state ={
      searchValue: '',
    }
  }

  handleChange(event){
    this.setState ({
      searchValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input
        value={this.state.searchValue}
        onChange={this.handleChange.bind(this)}
        className="search-input"
        placeholder="Search for video and press Enter"/>
      </div>
    );
  }
}

export default SearchBar;