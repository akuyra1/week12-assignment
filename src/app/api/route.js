// pages/api/igdb.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { action, params, endpoint, query } = req.body;
  const APIKEY = process.env.IGDB_API_KEY;
  const clientId = process.env.IGDB_CLIENT_ID;

  let url = "";
  let body = "";

  switch (action) {
    case "fetchGame":
      url = "https://api.igdb.com/v4/games";
      body = `fields name, summary, platforms.name, involved_companies.company.name, artworks.url, genres.name, first_release_date, themes.name, cover.*; where slug = "${params}"; limit 1;`;
      break;
    case "fetchData":
      url = `https://api.igdb.com/v4/${endpoint}`;
      body = "fields slug, cover.*; where total_rating_count > 500 ; limit 10;";
      break;
    case "search":
      url = "https://api.igdb.com/v4/search";
      body = JSON.stringify({
        fields: "game.name,game.first_release_date,game.cover.*",
        search: query,
        limit: 10,
        where: "game.version_parent = null",
      });
      break;
    default:
      return res.status(400).json({ message: "Invalid action" });
  }

  try {
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${APIKEY}`,
        "Content-Type": "application/json",
      },
      body,
    });

    if (!result.ok) {
      return res
        .status(result.status)
        .json({ error: "Network response was not ok" });
    }

    const data = await result.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
