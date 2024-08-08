"use client";
import { useRef } from "react";

export default function SearchBar({ onSearch }) {
  const searchRef = useRef(null);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchQuery = searchRef.current.value;
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
