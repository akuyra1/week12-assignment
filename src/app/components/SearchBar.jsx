"use client";
import { useRef } from "react";

export default function SearchBar() {
  const searchRef = useRef(null);

  return (
    <div>
      <form action="/search-result" method="get">
        <label htmlFor="search"></label>
        <input
          name="query"
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
