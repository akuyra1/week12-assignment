import Image from "next/image";
import gameImg from "@/../public/assets/gameboy.jpg";
import fetchData from "../utils/fetchData";
import Link from "next/link";

export default async function LandingGames() {
  let endpoint = "games";
  const game = await fetchData(endpoint);
  // console.log(game);

  // let imgId = game[0].cover.image_id;
  // console.log(imgId);

  let imgIdArray = [];

  function wrangleData() {
    for (let i = 0; i < game.length; i++) {
      imgIdArray.push([game[i].cover.image_id, game[i].id, game[i].slug]);
    }
  }
  wrangleData();
  // console.log(imgIdArray);

  return (
    <>
      <div className="games-container">
        {imgIdArray.map((game) => (
          <div className="landing-games" key={game[1]}>
            <Link href={`/game/${game[2]}`}>
              <Image
                className="each-game-image"
                src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${game[0]}.jpg`}
                alt="video game image"
                width={264}
                height={374}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
