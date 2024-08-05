import Image from "next/image";
import gameImg from "@/../public/assets/gameboy.jpg";

export default function FavouriteGames() {
  return (
    <>
      <div className="favourites">
        <h1>Favourite Games</h1>
        <div className="favourite-game">
          <Image src={gameImg} width={50} alt="game cover art" />
          <div>
            <h3>Game Title</h3>
            <p>
              Details: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Vitae, assumenda soluta placeat hic, maiores consectetur officia
              porro tempore nihil tenetur natus voluptatibus eius sed odit
              debitis? Similique iste facere sunt?
            </p>
            <p>Rating: &#9734;&#9734;&#9734;&#9734;&#9734;</p>
          </div>
        </div>
        <br />
        <div className="favourite-game">
          <Image src={gameImg} width={50} alt="game cover art" />
          <div>
            <h3>Game Title</h3>
            <p>
              Details: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Vitae, assumenda soluta placeat hic, maiores consectetur officia
              porro tempore nihil tenetur natus voluptatibus eius sed odit
              debitis? Similique iste facere sunt?
            </p>
            <p>Rating: &#9734;&#9734;&#9734;&#9734;&#9734;</p>
          </div>
        </div>
        <br />
        <div className="favourite-game">
          <Image src={gameImg} width={50} alt="game cover art" />
          <div>
            <h3>Game Title</h3>
            <p>
              Details: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Vitae, assumenda soluta placeat hic, maiores consectetur officia
              porro tempore nihil tenetur natus voluptatibus eius sed odit
              debitis? Similique iste facere sunt?
            </p>
            <p>Rating: &#9734;&#9734;&#9734;&#9734;&#9734;</p>
          </div>
        </div>
      </div>
    </>
  );
}
