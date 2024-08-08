"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import fetchSearch from "../utils/fetchSearch";
import SearchBar from "../components/SearchBar";

export default function SearchResult() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    if (searchQuery) {
      fetchResults(searchQuery);
    }
  }, [searchQuery]);

  const fetchResults = async (query) => {
    try {
      const data = await fetchSearch(query);
      setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <h1>Search Results</h1>
      <SearchBar />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}
