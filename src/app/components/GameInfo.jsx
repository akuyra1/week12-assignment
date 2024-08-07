import Image from "next/image";
import gameImg from "@/../public/assets/gameboy.jpg";
import heart from "@/../public/assets/heart.jpg";
import fetchGame from "../utils/fetchGame.js";

export default async function GameInfo({ params }) {
  // console.log(params);
  const gameInfo = await fetchGame(params.slug);
  // console.log(gameInfo);
  console.log(JSON.stringify(gameInfo));
  let time = new Date(gameInfo[0].first_release_date * 1000);
  let stringTime = time.toLocaleDateString("en-GB");

  return (
    <div className="game-info">
      <Image
        className="game-image"
        src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${gameInfo[0].cover.image_id}.jpg`}
        alt="video game image"
        width={135}
        height={300}
      />
      <div>
        <h1>{gameInfo[0].name}</h1>
        <p>Release Date: {stringTime}</p>
        <p>Developer: {gameInfo[0].involved_companies[0].company.name}</p>
        <p>
          Platforms:{" "}
          {gameInfo[0].platforms.map((platform) => platform.name).join(", ")}
        </p>
        <p>Genre: {gameInfo[0].genres.map((genre) => genre.name).join(", ")}</p>
        <p>Theme: {gameInfo[0].themes.map((theme) => theme.name).join(", ")}</p>
        <div className="heart-button">
          <button>
            <Image src={heart} alt="favourite button" width={30} />
          </button>
        </div>
      </div>
      <div className="game-description">
        <h3>Game Summary:</h3>
        <p>{gameInfo[0].summary}</p>
      </div>
    </div>
  );
}
