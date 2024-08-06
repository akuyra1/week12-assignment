// igdb fetch from API
export default async function fetchData(endpoint) {
  let APIKEY = process.env.IGDB_API_KEY;
  let clientId = process.env.IGDB_CLIENT_ID;

  const result = await fetch(`https://api.igdb.com/v4/${endpoint}`, {
    method: "POST",
    headers: {
      "Client-ID": `${clientId}`,
      Authorization: `Bearer ${APIKEY}`,
    },
    body: "fields slug, cover.*; where total_rating_count > 500 ; limit 10;",
  });

  const data = await result.json();
  return data;
}
