import Image from "next/image";
import heart from "@/../public/assets/heart.jpg";

export default function GameComments() {
  return (
    <div className="reviews">
      <h1>Reviews</h1>
      <div className="user-review">
        <Image src={heart} width={50} alt="user profile image" />
        <div>
          <h3>Username</h3>
          <p>
            Review Text: Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Vitae, assumenda soluta placeat hic, maiores consectetur
            officia porro tempore nihil tenetur natus voluptatibus eius sed odit
            debitis? Similique iste facere sunt?
          </p>
          <p>Rating: &#9734;&#9734;&#9734;&#9734;&#9734;</p>
        </div>
      </div>
      <br />
      <div className="user-review">
        <Image src={heart} width={50} alt="user profile image" />
        <div>
          <h3>Username</h3>
          <p>
            Review Text: Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Vitae, assumenda soluta placeat hic, maiores consectetur
            officia porro tempore nihil tenetur natus voluptatibus eius sed odit
            debitis? Similique iste facere sunt?
          </p>
          <p>Rating: &#9734;&#9734;&#9734;&#9734;&#9734;</p>
        </div>
      </div>
      <br />
      <div className="user-review">
        <Image src={heart} width={50} alt="user profile image" />
        <div>
          <h3>Username</h3>
          <p>
            Review Text: Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Vitae, assumenda soluta placeat hic, maiores consectetur
            officia porro tempore nihil tenetur natus voluptatibus eius sed odit
            debitis? Similique iste facere sunt?
          </p>
          <p>Rating: &#9734;&#9734;&#9734;&#9734;&#9734;</p>
        </div>
      </div>
    </div>
  );
}
