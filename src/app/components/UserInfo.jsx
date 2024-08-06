import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import heart from "@/../public/assets/heart.jpg";

export default async function UserInfo() {
  const user = await currentUser();

  return (
    <>
      <div className="user-info">
        <div>
          <h1>Welcome, {user.username}!</h1>
          <p>Some form of info about user</p>
        </div>
        <Image
          alt="user profile image"
          src={user.imageUrl}
          width={50}
          height={50}
        />
      </div>
      <p>
        Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus quasi hic aspernatur, dignissimos aut sit beatae aperiam
        earum dolore doloribus. Earum quisquam maxime vel cupiditate aliquid
        veniam quaerat neque sapiente.
      </p>
    </>
  );
}
