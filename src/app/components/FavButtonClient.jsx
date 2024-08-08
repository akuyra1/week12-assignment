"use client";

import heart from "@/../public/assets/heart.jpg";
import Image from "next/image";
import { toggleFav } from "./favouriteGame";
// import { useState } from "react";

export default function FavButton({ params, userInfo, coverUrl, title }) {
  //   const [toggle, setToggle] = useState();

  //need to usestate and onClick with a "form" to active the toggleFav function

  //maybe if statement to return full heart if the db check came back with

  return (
    <div className="heart-button">
      {/* button that will show if logged in */}
      {/* <button onSubmit={toggleFav(userInfo.userId, params.slug)}>
        <Image src={heart} alt="favourite button" width={30} />
      </button> */}
    </div>
  );
}
