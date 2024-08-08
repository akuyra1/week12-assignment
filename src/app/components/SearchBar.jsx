"use client";
import { useRef } from "react";

export default function SearchBar({ onSearch }) {
  console.log(onSearch);
  // we still make areference for the search input
  const searchRef = useRef(null);

  // handle the form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // get the search query
    const searchQuery = searchRef.current.value;
    console.log(searchQuery);
    // call the fucntion with the search query
    onSearch(searchQuery);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="search"></label>
        <input
          name="search"
          type="text"
          placeholder="Search..."
          required
          ref={searchRef}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
