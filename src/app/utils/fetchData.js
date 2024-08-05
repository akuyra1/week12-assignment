// export default async function fetchData(game) {
//   let APIKEY = "77aee5f5780447459a08d43f0d187ec0";
//   const result = await fetch(`https://api.rawg.io/api/games?key=${APIKEY}`, {
//     "content-type": "application/json",
//     token: "Token 77aee5f5780447459a08d43f0d187ec0",
//   });

//   const data = await result.json();
//   console.log(data);
// }

//igdb fetch from API
// export default async function fetchData(game) {
//   let APIKEY = process.env.IGDB_API_KEY;
//   let clientId = process.env.IGDB_CLIENT_ID;

//   const result = await fetch(`https://api.igdb.com/v4/screenshots`, {
//     method: "POST",
//     headers: {
//       "Client-ID": `${clientId}`,
//       Authorization: `Bearer ${APIKEY}`,
//     },
//     body: "fields *; limit 10;",
//   });

//   const data = await result.json();
//   console.log(data);
// }
