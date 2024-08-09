// app/api/search/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  const { query } = await request.json(); // Get query from request body
  const APIKEY = process.env.IGDB_API_KEY;
  const clientId = process.env.IGDB_CLIENT_ID;

  const result = await fetch("https://api.igdb.com/v4/search", {
    method: "POST",
    headers: {
      "Client-ID": `${clientId}`,
      Authorization: `Bearer ${APIKEY}`,
      "Content-Type": "application/json",
    },
    body: `fields name, game.slug, game.cover.*; where game.version_parent = null; search "${query}"; limit 20;`,
  });
  const data = await result.json();
  return NextResponse.json(data);
}
