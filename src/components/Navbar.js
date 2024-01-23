import React from "react";
import SearchBar from "./SearchBar";

export default function Navbar({ query, setQuery }) {
  return (
    <div className="nav">
      <h2>TastyPal</h2>
      <SearchBar query={query} setQuery={setQuery} />
    </div>
  );
}
