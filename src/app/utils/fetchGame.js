// igdb fetch from API
export default async function fetchGame(params) {
  let APIKEY = process.env.IGDB_API_KEY;
  let clientId = process.env.IGDB_CLIENT_ID;

  // console.log("params has:", params);

  const result = await fetch("https://api.igdb.com/v4/games", {
    method: "POST",
    headers: {
      "Client-ID": `${clientId}`,
      Authorization: `Bearer ${APIKEY}`,
    },
    body: `fields name, summary, platforms.name, involved_companies.company.name, genres.name, first_release_date, themes.name, cover.*; where slug = "${params}"; limit 1;`,
  });

  const data = await result.json();
  return data;
}
