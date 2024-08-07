import { dbConnect } from "../utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// code to handle server-side form submission
export async function handleSubmit(formData, userInfo, params) {
  "use server";
  const comment = formData.get("comment"); // this gets comment from form data
  const score = formData.get("score"); // this gets score from form data
  const db = dbConnect(); // this will connect to the database

  // sql to insert the comment into the db
  await db.query(
    `INSERT INTO nook_user_comments (username, comment, score, game_slug, user_img) VALUES ($1, $2, $3, $4, $5)`,
    [userInfo.userName, comment, score, params.slug, userInfo.profileImage]
  );
  revalidatePath(`/game/${params.slug}`); // revalidate the path to update the page
  redirect(`/game/${params.slug}`); // redirect to the game page
}
