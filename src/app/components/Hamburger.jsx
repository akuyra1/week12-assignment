"use client"
import '@/app/styles/Hamburger.css'
import '@/app/styles/Navigation.css'
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";


const DropdownMenuDemo = () => {

  return (
    <div className='hamburger'>
      <DropdownMenu.Root >
        <DropdownMenu.Trigger asChild className='ml-4'>
          <button className="IconButton" aria-label="Customise options">
            <HamburgerMenuIcon />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
            <DropdownMenu.Item className="DropdownMenuItem">
              <Link href="/">Home</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
            <Link href="/profile">Profile</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
            <Link href="/">Games</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
            <Link href="/">Favorites</Link>
            </DropdownMenu.Item>
            <div className='login-container'>
              <SignedOut>
                <SignUpButton
                  mode="modal"
                  className="burger-btns text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Sign Up
                </SignUpButton>
                <SignInButton
                  mode="modal"
                  className="burger-btns text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Sign In
                </SignInButton>
              </SignedOut>
            </div>
            <DropdownMenu.Arrow className="DropdownMenuArrow" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default DropdownMenuDemo;
