'use client';

import React from 'react';
import Link from 'next/link';
import { headerNavigationLinks } from '@/constants/headerNavigationLinks';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export const HeaderNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center">
      {headerNavigationLinks.map(({ name, path }) => (
        <Link
          href={path}
          key={name}
          className={clsx(
            'text-[17px] ml-[40px] leading-7 transition duration-500 hover:text-main-accent-color',
            pathname === path && 'text-main-accent-color'
          )}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};
