import Image from "next/image";
import gameImg from "@/../public/assets/gameboy.jpg";
import heart from "@/../public/assets/heart.jpg";
import fetchGame from "../utils/fetchGame.js";
import "@/app/styles/GameInfoPage.css";

export default async function GameInfo({ params }) {
  // console.log(params);
  const gameInfo = await fetchGame(params.slug);
  // console.log(gameInfo);
  // console.log(JSON.stringify(gameInfo));
  let time = new Date(gameInfo[0].first_release_date * 1000);
  let stringTime = time.toLocaleDateString("en-GB");

  return (
    <>
        <div className="body-container">
            <div className="game-title-container1">
                <h1 className="game-title">{gameInfo[0].name}</h1>
            </div>

            <div className="game-title-container">
                <div className="heart-button">
                    <button>
                        <Image src={heart} alt="favourite button" width={30} />
                    </button>
                </div>
            </div>
            <div className="game-info-container">
                <div className="game-info">
                    <Image
                    className="game-image"
                    src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${gameInfo[0].cover.image_id}.jpg`}
                    alt="video game image"
                    width={135}
                    height={300}
                    />
                </div>
                <div className="game-specs">
                    <p>
                        <span className="span">Release Date:</span> {stringTime}
                    </p>
                    <p>
                        <span className="span">Developer:</span>{" "}
                        {gameInfo[0].involved_companies[0].company.name}
                    </p>
                    <p>
                        <span className="span">Platforms:</span>{" "}
                        {gameInfo[0].platforms.map((platform) => platform.name).join(", ")}
                    </p>
                    <p>
                        <span className="span">Genre:</span>{" "}
                        {gameInfo[0].genres.map((genre) => genre.name).join(", ")}
                    </p>
                    <p>
                        <span className="span">Theme:</span>{" "}
                        {gameInfo[0].themes.map((theme) => theme.name).join(", ")}
                    </p>
                </div>
            </div>
            <div className="game-details">

            </div>
            <div className="game-description">
                <h3>Game Summary</h3>
                <p>{gameInfo[0].summary}</p>
            </div>
        </div>
      </>
  )
}
