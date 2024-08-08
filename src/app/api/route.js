export async function POST(req) {
  const { query } = req.body;
  const APIKEY = process.env.IGDB_API_KEY;
  const clientId = process.env.IGDB_CLIENT_ID;

  const response = await fetch("https://api.igdb.com/v4/search", {
    method: "POST",
    headers: {
      "Client-ID": clientId,
      Authorization: `Bearer ${APIKEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields:
        "fields alternative_name,character,checksum,collection,company,description,game,name,platform,published_at,test_dummy,theme;",
      search: query,
      limit: 10,
      where: "game.version_parent = null",
    }),
  });

  if (!response.ok) {
    return res
      .status(response.status)
      .json({ error: "Network response was not ok" });
  }

  const data = await response.json();
  return data;
}
