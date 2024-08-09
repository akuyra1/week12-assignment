import Image from "next/image";
import gameImg from "@/../public/assets/gameboy.jpg";
import heart from "@/../public/assets/heart.jpg";
import fetchGame from "../utils/fetchGame.js";
import "@/app/styles/GameInfoPage.css";
import { revalidatePath } from "next/cache.js";
import { toggleFav } from "./favouriteGame.js";
import { redirect } from "next/navigation.js";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import FavouriteButton from "./FavButtonClient.jsx";

export default async function GameInfo({ params, userInfo }) {
  // console.log(params);

  console.log("userInfo:", userInfo);
  console.log("userInfo.userId:", userInfo?.userId);
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
        <div className="game-info-container">
          <div className="game-info">
            <Image
              className="game-image"
              src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${gameInfo[0].cover.image_id}.jpg`}
              alt={`Cover art for ${gameInfo[0].name}`}
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
              {gameInfo[0].platforms
                .map((platform) => platform.name)
                .join(", ")}
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
        <div className="game-description">
          <SignedIn>
            <FavouriteButton
              params={params}
              userInfo={userInfo}
              gameInfo={gameInfo}
            />
          </SignedIn>
          <SignedOut>
            <h3 className="login-fav-message text-lg pt-2">
              Log in to add this game to your favourites!
            </h3>
            <br></br>
          </SignedOut>
          <h3>Game Summary</h3>
          <p>{gameInfo[0].summary}</p>
        </div>
      </div>
    </>
  );
}
