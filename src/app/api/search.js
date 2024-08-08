export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { query } = req.body;
  const APIKEY = process.env.IGDB_API_KEY;
  const clientId = process.env.IGDB_CLIENT_ID;

  try {
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
        .json({ error: "Network response was blehhhh" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching search results:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
