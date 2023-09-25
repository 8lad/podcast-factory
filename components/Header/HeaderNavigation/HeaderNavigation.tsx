'use client';

import React from 'react';
import Link from 'next/link';
import { headerNavigationLinks } from '@/constants/headerNavigationLinks';

export const HeaderNavigation = () => {
  return (
    <nav className="flex items-center">
      {headerNavigationLinks.map(({ name, path }) => (
        <Link href={path} key={name}>
          {name}
        </Link>
      ))}
    </nav>
  );
};
