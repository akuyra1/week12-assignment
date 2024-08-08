import Image from "next/image";
import gameImg from "@/../public/assets/gameboy.jpg";
import { dbConnect } from "../utils/dbConnection";
// import fetchGame from "../utils/fetchGame";
import Link from "next/link";
import "@/app/styles/UserProfilePage.css";
export default async function FavouriteGames({ userId }) {
  const db = dbConnect();

  const favGames = await db.query(
    `SELECT * FROM nook_user_fav_games WHERE user_id = $1 `,
    [userId.userId]
  );

  const favGameRows = favGames.rows;

  console.log("testing", userId);
  console.log("testing2", userId.userId);

  // console.log("favgames", favGames.rows);

  return (
    <>
      <div className="favourites">
        <h1>Favourite Games</h1>
        <div className="fav-games-container">
          {favGameRows.map((game) => (
            <div className="favourite-game" key={game.id}>
              <Link href={`/game/${game.game_slug}`}>
                <Image
                  src={game.cover_url}
                  width={200}
                  height={200}
                  alt="game cover art"
                  className="fav-game"
                />
                <div>
                  <h3 className="fav-game-title">{game.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
