import Image from "next/image";
import heart from "@/../public/assets/heart.jpg";
import "@/app/styles/GameReviews.css";


export default function GameComments() {
  return (
    <div className="reviews">
      <h1 className="pb-6">Reviews</h1>
      <div className="user-review">
        <div>
          <div className="commenting-user-container">
            <Image src={heart} width={50} className="user-pic" alt="user profile image"/>
            <h3 className="user-name">Username</h3>
          </div>
          <p className="user-comment">
            Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Vitae, assumenda soluta placeat hic, maiores consectetur
            officia porro tempore nihil tenetur natus voluptatibus eius sed odit
            debitis? Similique iste facere sunt?
          </p>
          <p className="user-rating">Rating: &#9734;&#9734;&#9734;&#9734;&#9734;</p>
        </div>
      </div>
      <br />
      <div className="user-review">
        <div>
          <div className="commenting-user-container">
            <Image src={heart} width={50} className="user-pic" alt="user profile image"/>
            <h3 className="user-name">Username</h3>
          </div>
          <p className="user-comment">
            Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Vitae, assumenda soluta placeat hic, maiores consectetur
            officia porro tempore nihil tenetur natus voluptatibus eius sed odit
            debitis? Similique iste facere sunt?
          </p>
          <p className="user-rating">Rating: &#9734;&#9734;&#9734;&#9734;&#9734;</p>
        </div>
      </div>
      <br />
      <div className="user-review">
        <div>
          <div className="commenting-user-container">
            <Image src={heart} width={50} className="user-pic" alt="user profile image"/>
            <h3 className="user-name">Username</h3>
          </div>
          <p className="user-comment">
            Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Vitae, assumenda soluta placeat hic, maiores consectetur
            officia porro tempore nihil tenetur natus voluptatibus eius sed odit
            debitis? Similique iste facere sunt?
          </p>
          <p className="user-rating">Rating: &#9734;&#9734;&#9734;&#9734;&#9734;</p>
        </div>
      </div>
    </div>
  );
}
