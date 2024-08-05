import GameInfo from "@/app/components/GameInfo";
import GameComments from "@/app/components/GameComments";

export default function Game() {
  return (
    <div className="main-body">
      <GameInfo />
      <GameComments />
    </div>
  );
}
