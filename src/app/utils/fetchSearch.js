export default async function fetchSearch(query) {
  const APIKEY = process.env.IGDB_API_KEY;
  const clientId = process.env.IGDB_CLIENT_ID;

  // make a post api with the search query
  const response = await fetch("https://api.igdb.com/v4/search", {
    method: "POST",
    headers: {
      "Client-ID": clientId,
      Authorization: `Bearer ${APIKEY}`,
      "Content-Type": "application/json",
    },
    // send query params in the body
    body: JSON.stringify({
      fields: "game.name,game.first_release_date,game.cover.*",
      search: query,
      limit: 10,
      where: "game.version_parent = null",
    }),
  });

  // check if the response is ok
  if (!response.ok) {
    throw new Error("Network response was blehhhh");
  }

  // return the json data
  const data = await response.json();
  return data;
}
