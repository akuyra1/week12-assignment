"use server";

export async function search(query) {
  const APIKEY = process.env.IGDB_API_KEY;
  const clientId = process.env.IGDB_CLIENT_ID;
  // console.log("query is:", query);

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
  return data;
}

// if (!response.ok) {
//   return res
//     .status(response.status)
//     .json({ error: "Network response was not ok" });
// }
// body: JSON.stringify({
//     const data = await response.json();
//     console.log(data);
//     return new Response(JSON.stringify(data));
//   }

// fields:
//    "alternative_name.,character.,checksum.,collection.,company.,description.,game.,name.,platform.,published_at.,test_dummy.,theme.;",
// search: query,
// limit: 10,
// where: "game.version_parent = null",
// body: fields name, summary, platforms.name, involved_companies.company.name, artworks.url, genres.name, first_release_date, themes.name, cover.*; where slug = "${params}"; limit 1;,
