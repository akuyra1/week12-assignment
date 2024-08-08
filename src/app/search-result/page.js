"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import fetchSearch from "../utils/fetchSearch";
import SearchBar from "../components/SearchBar";

export default function SearchResult() {
  const router = useRouter();
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

  const handleSearch = (query) => {
    if (query !== searchQuery) {
      setSearchQuery(query);
      router.push(`/search-result?query=${query}`);
    }
  };

  return (
    <div>
      <h1>Search Results</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}
