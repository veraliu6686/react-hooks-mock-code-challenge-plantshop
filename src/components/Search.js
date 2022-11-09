import React from "react";

function Search( {text, setText}) {

  const handleInput = (e) =>{
    setText (e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value = {text}
        placeholder="Type a name to search..."
        onChange={handleInput}
      />
    </div>
  );
}

export default Search;
