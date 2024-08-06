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
            <Link href="/">Profile</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
            <Link href="/">Games</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
            <Link href="/">Favorites</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Arrow className="DropdownMenuArrow" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default DropdownMenuDemo;