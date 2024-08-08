import handleSubmit from "../components/HandleSubmit";
import SearchBar from "../components/SearchBar";

export default async function SearchResult() {
  return (
    <div>
      <h1>Search Results</h1>
      <SearchBar handleSubmit={handleSubmit} />

      <ul></ul>
    </div>
  );
}
