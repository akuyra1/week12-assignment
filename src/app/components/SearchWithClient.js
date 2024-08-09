"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SearchWithClient = () => {
  const queryRef = useRef(null);
  const [response, setResponse] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const query = queryRef.current.value;

    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      setResponse(data);

      queryRef.current.value = "";
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="comment-form-container">
      <h1>Enter your search:</h1>
      <form
        className="max-w-sm mx-auto"
        onSubmit={handleFormSubmit}
        action="#"
        method="post"
      >
        <label htmlFor="query"></label>
        <input
          type="text"
          name="query"
          required
          className="add-comment-text bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ref={queryRef}
        />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          Submit
        </button>
      </form>
      {response && (
        <div className="games-container">
          {response.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              {item.game && item.game.slug && item.game.cover && (
                <Link href={`/game/${item.game.slug}`}>
                  <Image
                    className="each-game-image"
                    src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${item.game.cover.image_id}.jpg`}
                    alt={`Cover art for ${item.name}`}
                    width={264}
                    height={374}
                  />
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchWithClient;
