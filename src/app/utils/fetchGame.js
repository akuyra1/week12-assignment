// igdb fetch from API
export default async function fetchGame(params) {
  let APIKEY = process.env.IGDB_API_KEY;
  let clientId = process.env.IGDB_CLIENT_ID;

  // console.log("params has:", params);

  const result = await fetch("http://localhost:3000/api/route", {
    method: "POST",
    headers: {
      "Client-ID": `${clientId}`,
      Authorization: `Bearer ${APIKEY}`,
    },
    body: `fields name, summary, platforms.name, involved_companies.company.name, artworks.url, genres.name, first_release_date, themes.name, cover.*; where slug = "${params}"; limit 1;`,
  });

  const data = await result.json();
  return data;
}
