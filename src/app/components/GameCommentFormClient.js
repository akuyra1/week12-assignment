"use client";
import { useRef } from "react";
import Image from "next/image";

const GameCommentFormClient = ({ handleSubmit, params, userInfo }) => {
  const commentRef = useRef(null); // this creates a reference for the comment input
  const scoreRef = useRef(null); // this creates a reference for the score input

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // prevents default behavior

    // create the form data object with comment and score
    const formData = new FormData();
    formData.append("comment", commentRef.current.value);
    formData.append("score", scoreRef.current.value);

    // call the handleSubmit
    try {
      await handleSubmit(formData, userInfo, params);

      // clears the form after submission
      commentRef.current.value = "";
      scoreRef.current.value = "";
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // if userInfo is undefined:
  if (!userInfo) {
    return (
      <div>
        <h1>You shouldnt see this!</h1>
      </div>
    );
  }

  // render the form
  return (
    <div className="comment-form-container">
      <h1>Leave a review</h1>
      <form className="max-w-sm mx-auto" onSubmit={handleFormSubmit}>
        <div className="flex">
          <Image
            src={userInfo.profileImage}
            alt={`${userInfo.userName}'s profile picture`}
            width={75}
            height={75}
            className="commenting-profile-pic"
          />
          <h2>{userInfo.userName}</h2>
        </div>
        <label htmlFor="comment">Review</label>
        <textarea
          name="comment"
          placeholder="Write your review"
          className="add-comment-text bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          ref={commentRef} // attach ref to comment input
        />
        <label htmlFor="score">Leave your score</label>
        <input
          type="number"
          name="score"
          required
          className="add-comment-text bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          min="1"
          max="10"
          ref={scoreRef} // attach ref to score input
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
};

export default GameCommentFormClient;
