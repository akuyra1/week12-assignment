import { revalidatePath } from "next/cache";
import { search } from "../utils/search";
import SearchResultsBox from "./SearchResults";

async function handleSearch(formData) {
  "use server";
  const APIKEY = process.env.IGDB_API_KEY;
  const clientId = process.env.IGDB_CLIENT_ID;
  const query = formData.get("query");

  const result = await fetch("https://api.igdb.com/v4/search", {
    method: "POST",
    headers: {
      "Client-ID": `${clientId}`,
      Authorization: `Bearer ${APIKEY}`,
      "Content-Type": "application/json",
    },
    body: `fields name, game, theme; search "${query}"; limit 10;`,
  });
  const data = await result.json();
  console.log(data);
  revalidatePath("/search");
  return data;

  // Return the component with the search results
}

// console.log(data);

export default async function SearchBox() {
  return (
    <div>
      <form action={handleSearch}>
        <label htmlFor="query">Search here:</label>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <div>
        <h2>results:</h2>
      </div>
    </div>
  );
}

// {searchResults?.length > 0 ? (
//     <ul>
//       {searchResults.map((result) => (
//         <li key={result.id}>{result.name}</li>
//       ))}
//     </ul>
//   ) : (
//     <p>No results found</p>
//   )}
