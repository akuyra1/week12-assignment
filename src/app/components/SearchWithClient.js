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
    <div className="max-w-sm mx-auto">
      <h1>Enter your search:</h1>
      <br />
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
          className="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ref={queryRef}
        />
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
