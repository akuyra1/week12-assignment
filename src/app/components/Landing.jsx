import "@/app/globals.css";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="landing ">
      <h1 className="text-5xl font-bold text-purple-500 hover:text-purple-400 transition-colors duration-300 ease-in-out drop-shadow-lg">
        GameNook
      </h1>
      <Link href="/search">
        <h1 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Search for games
        </h1>
      </Link>
      <SignedOut>
        <p className="welcome-message">
          Welcome to GameNook, the ultimate game haven! Whether you&apos;re
          hunting dragons, building empires, or just looking to unwind with some
          digital zen, you&apos;ve landed in the right place. Dive into our game
          catalogue and save your favourites now! Let&apos;s play!
        </p>

        <SignUpButton mode="modal">Sign In/Up</SignUpButton>
      </SignedOut>
    </div>
  );
}
