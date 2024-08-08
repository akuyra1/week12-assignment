import Image from "next/image";
import heart from "@/../public/assets/heart.jpg";

import { dbConnect } from "../utils/dbConnection";
import "@/app/styles/GameReviews.css";

export default async function GameComments({ params, searchParams }) {
  const db = dbConnect();

  const commentResults = await db.query(
    `SELECT * FROM nook_user_comments WHERE game_slug = $1`,
    [params.slug]
  );
  const userRes = commentResults.rows;

  return (
    <div className="reviews">
      <h1 className="pb-6">Reviews</h1>

      {userRes.map((post) => (
        <div className="user-review" key={post.id}>
          <div>
            <div className="commenting-user-container">
              <Image
                src={post.user_img}
                width={50}
                height={50}
                alt={`${post.username}'s profile picture`}
                className="user-pic"
              />
              <h3 className="user-name">{post.username}</h3>
            </div>
            <p className="user-comment">{post.comment}</p>
            <p className="user-rating">Rating: {post.score}/10</p>
          </div>
        </div>
      ))}
    </div>
  );
}
