import UserInfo from "@/app/components/UserInfo";
import FavouriteGames from "@/app/components/FavouriteGames";

export default function User() {
  return (
    <div className="main-body">
      <UserInfo />
      <FavouriteGames />
    </div>
  );
}
