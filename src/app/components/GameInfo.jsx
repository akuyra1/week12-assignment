import Image from "next/image";
import gameImg from "@/../public/assets/gameboy.jpg";
import heart from "@/../public/assets/heart.jpg";

export default function GameInfo() {
  return (
    <div className="game-info">
      <Image
        className="game-image"
        src={gameImg}
        alt="video game image"
        width={135}
        height={"auto"}
      />
      <div>
        <h1>Game Title</h1>
        <p>Release Date:</p>
        <p>Developer:</p>
        <p>Publisher:</p>
        <div className="heart-button">
          <button>
            <Image src={heart} alt="favourite button" width={30} />
          </button>
        </div>
      </div>
      <div className="game-description">
        <h3>Game Description:</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
          nostrum odio corporis tempore velit dolorem cum assumenda laborum
          magni. Sint, at obcaecati corporis molestias pariatur quos! Quos omnis
          consectetur natus!
        </p>
      </div>
    </div>
  );
}
