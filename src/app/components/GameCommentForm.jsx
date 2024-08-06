//! work in progress DO NOT USE YET

//once clerk is implemented we'll need to import it here and get the clerk id to put into the database, this will help with future database queries

import { dbConnect } from "../utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//!only show if logged in with clerk

// database entry need to go in this order:
// using the gameid param from the API, check whether the game id exists in "nook_games" api_query column, if YES then copy id of that entry into the nook_comments table
// if NO then make new entry in nook_games table using that param
// table entry in "nook_comments" includes these:
// user_id - foreign key taken from "nook_users" table
// comment - from form
// score - from form
// game_id - foreign key taken from "nook_games" table
// also need to make an entry in "nook_games" table

export default function GameCommentForm() {
  //game params here
  async function handleSubmit(formData) {
    "use server";
    // const username = get from clerk
    const comment = formData.get("comment");
    const score = formData.get("score");
    const db = dbConnect();
    await db.query(
      `SQL query here`,
      [userId, comment, score, gameId] // might need to populate directly with SQL such as userId from "nook_users" table and gameId from "noook_games" table
    );
    // console.log(params);
    // revalidatePath("/"); - fix revalidate path here
    // revalidatePath(`/expansions/${params.id}`);
    // Update the path to be revalidated as needed
    // redirect("/");
  }

  return (
    <div>
      <h1>Leave a comment:</h1>
      <form className="max-w-sm mx-auto" action={handleSubmit}>
        <label htmlFor="comment">Review:</label>
        <textarea
          type="text"
          name="comment"
          placeholder="Write your bio"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <label htmlFor="score">Leave your score:</label>
        <input
          type="number"
          name="clerkId"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
