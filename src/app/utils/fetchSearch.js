// app/utils/igdb.js
export default async function igdbFetch({ action, params, endpoint, query }) {
  const response = await fetch("http://localhost:3000/api/route", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action, params, endpoint, query }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
}
