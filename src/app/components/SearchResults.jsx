"use client";

export default function SearchResultsBox({ searchProps }) {
  console.log("Prop passed to results box:", searchProps);

  return (
    <div>
      <h1>Search results here:</h1>
      {searchProps?.length > 0 ? (
        <ul>
          {searchProps.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}
