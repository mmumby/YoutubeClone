import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(){
    super()
    this.state ={
      searchValue: '',
    }
  }

  handleKeyDown(event){
    if (event.key === 'Enter') {
      console.log(event.target.value);
      event.target.value = '';
    }

    this.setState ({
      searchValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input onKeyDown={this.handleKeyDown.bind(this)} className="search-input" placeholder="Search for video and press Enter"/>
      </div>
    );
  }
}

export default SearchBar;