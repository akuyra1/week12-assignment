// import { dbConnect } from "../utils/dbConnection";

// export default async function checkFav(params, userInfo) {
//   const db = dbConnect();

//   // Check if the game is already a favorite
//   const result = await db.query(
//     `SELECT * FROM nook_user_fav_games WHERE user_id = $1 AND game_slug = $2`,
//     [userInfo.userId, params.slug]
//   );
//   if (result.rows.length > 0) {
//     let isFav = true;
//   } else {
//     let isFav = false;
//   }
//   return isFav;
// }
