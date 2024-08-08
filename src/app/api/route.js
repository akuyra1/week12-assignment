export default async function POST(req, res) {
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
      fields: "game.name,game.first_release_date,game.cover.*",
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

  const data = await request.json();
  return new Response(JSON.stringify(data));
}
