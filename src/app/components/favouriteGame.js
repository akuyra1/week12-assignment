import { dbConnect } from "../utils/dbConnection";
const db = dbConnect();
//check table for entry which passes result to the toggleFav function
async function isItFavourited(userId, slug) {
  try {
    const result = await db.query(
      `SELECT * FROM nook_user_fav_games WHERE user_id = $1 AND game_slug = $2`,
      [userId, slug]
    );
    // console.log(result.rows);

    return result.rows;
  } catch (error) {
    console.error("error checking favourite status", error);
    throw new Error("failed to check for favourite status");
  }
}

export async function toggleFav(userId, slug, coverUrl, title) {
  // Check if the game is already a favorite using isItFavourited()
  //error check is somewhat unnecessary since we will just have a dummy heart button that if logged out will redirect to log in
  if (userId === undefined) {
    throw new Error("Cannot favourite unless you log in");
  }

  const isFav = await isItFavourited(userId, slug);

  if (isFav.length > 0) {
    // If the game is already a favorite, remove it from the favorites list
    await db.query(
      `DELETE FROM nook_user_fav_games WHERE user_id = $1 AND game_slug = $2`,
      [userId, slug]
    );
  } else {
    // If the game is not a favorite, add it to the favorites list
    await db.query(
      `INSERT INTO nook_user_fav_games (user_id, game_slug, cover_url, title) VALUES ($1, $2, $3, $4)`,
      [userId, slug, coverUrl, title]
    );
  }
}

// export async function favourite() {
//   "use server";
//   await toggleFav();
// }

// export async function unfavourite() {
//   "use server";
//   await toggleFav();
// }

//I want to use state to make a button to add the game on this dynamic page to my favourites list which is a database I can access using the favouriteGames function

//   const favourite = checkfav();

//   const [fav, setFav] = useState(favourite);

//   // function handleClick() {
//   //   setFav()
//   // }
