"use client";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import fetchSearch from "../utils/fetchSearch";

export default function SearchResult({ initialQuery }) {
  // earch results into state
  const [results, setResults] = useState([]);
  // search query into state
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    // fetch results if searchQuery actually exists in state
    if (searchQuery) {
      fetchResults(searchQuery);
    }
  }, [searchQuery]);

  // we fetch the results from the api
  const fetchResults = async (query) => {
    try {
      console.log("Fetching results for query:", query);
      const data = await fetchSearch(query);
      console.log("Fetched search results:", data);
      setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  function onSearch() {
    setSearchQuery(searchQuery);
  }

  return (
    <div>
      <h1>Search Results</h1>
      <SearchBar
        onSearch={() => {
          onSearch();
        }}
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}
