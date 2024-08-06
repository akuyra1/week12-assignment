import Image from "next/image";
import gameImg from "@/../public/assets/gameboy.jpg";
import fetchData from "../utils/fetchData";

export default async function LandingGames() {
  let endpoint = "screenshots";
  const titles = await fetchData(endpoint);
  console.log(titles);

  return (
    <div className="landing-games">
      <Image
        className="game-image"
        src={gameImg}
        alt="video game image"
        width={"auto"}
        height={"auto"}
      />
      <Image
        className="game-image"
        src={gameImg}
        alt="video game image"
        width={"auto"}
        height={"auto"}
      />
      <Image
        className="game-image"
        src={gameImg}
        alt="video game image"
        width={"auto"}
        height={"auto"}
      />
      <Image
        className="game-image"
        src={gameImg}
        alt="video game image"
        width={"auto"}
        height={"auto"}
      />
      <Image
        className="game-image"
        src={gameImg}
        alt="video game image"
        width={"auto"}
        height={"auto"}
      />
      <Image
        className="game-image"
        src={gameImg}
        alt="video game image"
        width={"auto"}
        height={"auto"}
      />
    </div>
  );
}
