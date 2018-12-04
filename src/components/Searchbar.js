import React from 'react';
 
const Searchbar = props => {
  return(
    <div>
      <input className="searchbar" type="text" placeholder="search user" onChange={props.searchFunc}/>
    </div>
  )
}
 
export default Searchbar;