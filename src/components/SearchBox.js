import React from "react";

function SearchBox({ onFieldValueChange }) {
  return (
    <div className="pa-2">
      <input
        className="pa-3 ba b--green bg-lightest-blue"
        onChange={onFieldValueChange}
        type="search"
        placeholder="search robot friends"
      />
    </div>
  );
}

export default SearchBox;
