import React, { useState } from "react";

export default function SearchBar({ query, setQuery }) {
  return (
    <div>
      <input
        name="search-bar"
        className="search-bar"
        placeholder="Search your reciepe "
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
