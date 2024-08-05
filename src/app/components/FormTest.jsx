//once clerk is implemented we'll need to import it here and get the clerk id to put into the database, this will help with future database queries

import { dbConnect } from "../utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// import formStyles from "./form.module.css";

export default function UserFormTest(
  {
    //   expansions,
    //   selectedExpansion,
    //   params,
  }
) {
  async function handleSubmit(formData) {
    "use server";
    const username = formData.get("username");
    const bio = formData.get("bio");
    const clerkId = formData.get("clerkId");

    const db = dbConnect();
    await db.query(
      `INSERT INTO nook_users (username, bio, clerk_id) VALUES ($1, $2, $3)`,
      [username, bio, clerkId]
    );
    // console.log(params);
    revalidatePath("/userinputtest");
    // revalidatePath(`/expansions/${params.id}`);
    // Update the path to be revalidated as needed
    redirect("/");
  }

  return (
    <div>
      <form className="max-w-sm mx-auto" action={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <label htmlFor="username">bio</label>
        <textarea
          type="text"
          name="bio"
          placeholder="Write your bio"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <label htmlFor="clerkId">ClerkId Dummy test</label>
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
