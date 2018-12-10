import React, { Component } from 'react';
import Searchbar from './Searchbar'

class Sidebar extends Component{
  render(){
    return(
      <div>
        <p>Sidebar</p>
        <Searchbar searchFunc={ this.props.filter } />
      </div>
    );
  }
}
export default Sidebar;
