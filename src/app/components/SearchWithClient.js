"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/app/styles/GameSearch.css"

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
    <div>
      <div className="form-container">
        <h1 className="search-title">Enter your search</h1>
        <br />
        <form
          className=""
          onSubmit={handleFormSubmit}
          action="#"
          method="post"
        >
          <label htmlFor="query"></label>
          <input
            type="text"
            name="query"
            required
            className="search-bar mb-3 ml-4 mr-4 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ref={queryRef}
          />
          <br />
          <button
            className=" search-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {response && (
        <div className="games-container">
          {response.map((item) => (
            
            <div className="container2" key={item.id}>
              <h2 className="search-game-title">{item.name}</h2>
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
