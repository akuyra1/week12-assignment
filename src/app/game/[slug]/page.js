import GameInfo from "@/app/components/GameInfo";
import GameComments from "@/app/components/GameComments";

export default function Game({ params }) {
  return (
    <div className="main-body">
      <GameInfo params={params} />
      <GameComments />
    </div>
  );
}
