import UserInfo from "@/app/components/UserInfo";
import FavouriteGames from "@/app/components/FavouriteGames";

import { currentUser } from "@clerk/nextjs/server";

export default async function User() {
  const user = await currentUser();

  let serverData = undefined;

  if (user === null) {
    let serverData = undefined;
  } else {
    serverData = {
      userId: user.id,
      profileImage: user.imageUrl,
      userName: user.username,
    };
  }

  // console.log(serverData);

  return (
    <div className="main-body">
      <UserInfo />
      <FavouriteGames userId={serverData} />
    </div>
  );
}
