import Image from "next/image";
import gameImg from "@/../public/assets/gameboy.jpg";

export default function LandingGames() {
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
