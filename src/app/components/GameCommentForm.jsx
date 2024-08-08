//!replaced by GameCommentCLient/Server.js this isn't needed anymore

//once clerk is implemented we'll need to import it here and get the clerk id to put into the database, this will help with future database queries

import { dbConnect } from "../utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function GameCommentForm({ params, userInfo }) {
  //game params here
  console.log("is this it?", userInfo.userName);
  async function handleSubmit(formData) {
    "use server";
    // const username = get from clerk
    const comment = formData.get("comment");
    const score = formData.get("score");
    const db = dbConnect();

    console.log(userInfo);

    await db.query(
      `INSERT INTO nook_user_comments (username, comment, score, game_slug, user_img) VALUES ($1, $2, $3, $4, $5)`,
      [userInfo.userName, comment, score, params.slug, userInfo.profileImage]
    );
    revalidatePath(`/game/${params.slug}`);
    redirect(`/game/${params.slug}`);
  }

  // console.log("this is the user info:", userInfo.userId);
  // console.log("this is the game name:", params.slug);

  //conditional rendering hack..
  if (userInfo === undefined) {
    return (
      <div>
        <h1>You shouldnt see this!</h1>
      </div>
    );
  } else {
    return (
      <div className="comment-form-container">
        <h1>Leave a review</h1>

        {/* <h1>User Id = {userInfo.userId}</h1> */}
        <form className="max-w-sm mx-auto" action={handleSubmit}>
          <div className="flex">
            <Image
              src={userInfo.profileImage}
              alt="User Profile picture"
              width={75}
              height={75}
              className="commenting-profile-pic"
            ></Image>
            <h2>{userInfo.userName}</h2>
          </div>
          <label htmlFor="comment">Review</label>
          <textarea
            type="text"
            name="comment"
            placeholder="Write your review"
            className="add-comment-text bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <label htmlFor="score">Leave your score</label>
          <input
            type="number"
            name="score"
            required
            className="add-comment-text bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            min="1"
            max="10"
          />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
