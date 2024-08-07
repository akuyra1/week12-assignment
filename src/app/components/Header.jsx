import Link from "next/link";
import { Flex, Text, Button } from "@radix-ui/themes";

import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { ClerkProvider } from "@clerk/nextjs";
import Hamburger from "@/app/components/Hamburger";
import "@/app/styles/Navigation.css";

const Header = () => {
  const { userId } = auth();

  return (
    <>
      <nav className="py-4 px-6 flex items-center justify-between mb-5 navContainer">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-2xl font-bold text-purple-600 hover:text-purple-400 transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-1 hover:drop-shadow-xl">
              GameNook
            </div>
          </Link>
        </div>
        <div className="container flex justify-end m-0">
          {!userId && (
            <div className="text-white">
              <SignedOut>
                <SignUpButton
                  mode="modal"
                  className="text-white nav-signUp focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Sign Up
                </SignUpButton>
                <SignInButton
                  mode="modal"
                  className="text-white nav-signIn focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Sign In
                </SignInButton>
              </SignedOut>
            </div>
          )}
          {userId && (
            <Link
              href="/profile"
              className="text-white hover:text-red-100 mr-5 profileLink"
            >
              Profile
            </Link>
          )}
          <SignedIn>
            <UserButton afterSwitchSessionUrl="/" />
          </SignedIn>
          <Hamburger />
        </div>
      </nav>
    </>
  );
};

export default Header;
