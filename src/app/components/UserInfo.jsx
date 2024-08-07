import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import heart from "@/../public/assets/heart.jpg";
import "@/app/styles/UserProfilePage.css";


export default async function UserInfo() {
  const user = await currentUser();

  return (
    <div className="body">

      <div className="user-info">
        <Image
          alt="user profile image"
          src={user.imageUrl}
          width={50}
          height={50}
          className="profile-pic"
        />
        <div>
          <h1 className="user-profile-name h1">Welcome, {user.username}!</h1>
          <p className="user-profile-name p">{user.username}&apos;s collection of games</p>
        </div>
      </div>
      {/* <p>
        Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus quasi hic aspernatur, dignissimos aut sit beatae aperiam
        earum dolore doloribus. Earum quisquam maxime vel cupiditate aliquid
        veniam quaerat neque sapiente.
      </p> */}
    </div>
  );
}
