import { dbConnect } from "../utils/dbConnection";

export async function favouriteGame() {
  // const username = get from clerk

  const db = dbConnect();

  console.log(userInfo);

  await db.query(
    `INSERT INTO nook_user_comments (username, comment, score, game_slug) VALUES ($1, $2, $3, $4)`,
    [userInfo.userName, comment, score, params.slug]
  );
}
