import React, { Component } from 'react';

class Searchbar extends Component {
  state = { searchValue: 'ff' }

  updateInputValue(evt) {
    this.setState({
      searchValue: evt.target.value
    });

    this.props.searchFunc(evt.target.value)();
  }

  render() {
  	return(
      <div>
        <input value={this.state.searchValue} className="searchbar" type="text" placeholder="search user" onChange={evt => this.updateInputValue(evt)}/>
      </div>
	 );
  }
}

export default Searchbar;
