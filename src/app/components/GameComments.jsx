import Image from "next/image";
import heart from "@/../public/assets/heart.jpg";
import { dbConnect } from "../utils/dbConnection";

export default async function GameComments({ params, searchParams }) {
  const db = dbConnect();

  const commentResults = await db.query(
    `SELECT * FROM nook_user_comments WHERE game_slug = $1`,
    [params.slug]
  );
  const userRes = commentResults.rows;

  return (
    <div className="reviews">
      <h1>Reviews</h1>

      {userRes.map((post) => (
        <div className="user-review" key={post.id}>
          <Image
            src={post.user_img}
            width={50}
            height={50}
            alt="user profile image"
          />
          <div>
            <h3>{post.username}</h3>
            <p>{post.comment}</p>
            <p>Rating: {post.score}/10</p>
          </div>
        </div>
      ))}
      <br />
    </div>
  );
}
