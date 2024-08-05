import Image from "next/image";
import heart from "@/../public/assets/heart.jpg";

export default function UserInfo() {
  return (
    <>
      <div className="user-info">
        <div>
          <h1>Username</h1>
          <p>Some form of info about user</p>
        </div>
        <Image alt="user profile image" src={heart} width={50} />
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
