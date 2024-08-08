import { toggleFav } from "./favouriteGame";
import Image from "next/image";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function FavouriteButton({ userInfo, params, gameInfo }) {
  let coverUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${gameInfo[0].cover.image_id}.jpg`;
  let title = gameInfo[0].name;

  async function handleToggle() {
    "use server";

    await toggleFav(userInfo.userId, params.slug, coverUrl, title);
    revalidatePath(`/game/${params.slug}`);
    redirect("/profile");
  }

  return (
    <div>
      <form action={handleToggle}>
        <button type="submit">
          <Image
            src="/assets/filled-heart.png"
            width={75}
            height={75}
            alt="favourite button"
          ></Image>
        </button>
      </form>
    </div>
  );
}
