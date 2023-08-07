'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';

import { Button } from '@/Atom/Button';
import { Navigation } from '@/Molecule/Navigation';
import { Searchbar } from '@/Molecule/Searchbar';
import { AiOutlineMenu } from 'react-icons/ai';
import { Icon } from '@/design-system/Atom/Icon';

const Navbar = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-20 backdrop-blur-[12px] flex flex-col w-full">
      <div className="px-4 border-b lg:px-8">
        <div className="flex items-center h-16 ">
          <Link
            className="items-center hidden text-3xl font-semibold md:flex"
            href="/"
          >
            {/* <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" />  */}
            Blogger
          </Link>

          <div
            className={`transition-[visibility] md:visible flex items-center ${
              hamburgerMenuIsOpen ? 'visible' : 'delay-500 invisible'
            }`}
          >
            <Navigation
              className={`md:mx-6 fixed top-[64px] left-0 h-[calc(100vh_-_4rem)] w-full overflow-auto bg-background transition-opacity border-t-2 md:border-none duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none ${
                hamburgerMenuIsOpen
                  ? 'translate-x-0 opacity-100 z-30'
                  : 'translate-x-[-100vw] opacity-0'
              }`}
            />
          </div>

          <div className="flex items-center ml-auto space-x-2 lg:space-x-4">
            <Searchbar
              onclickHandler={() => console.log('first')}
              leftIcon={BsSearch}
              placeholder="Search Blogger"
              wrapperClass="pl-2"
            />

            <Button
              variant={'primary'}
              size={'slim'}
              className="py-3 border-none rounded-lg bg-neutral-500 md:hidden"
              onClick={() => setHamburgerMenuIsOpen((open) => !open)}
            >
              <span className="sr-only">Toggle menu</span>
              <Icon icon={AiOutlineMenu} className="text-neutral-200" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
