import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input className="dark-blue pa3 ba b--pink bg-washed-blue" type="search" placeholder="search robots" onChange={searchChange} />
    </div>
  );
};

export default SearchBox;
