'use client';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const HeaderLogo = () => {
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  return isMainPage ? (
    <div className="max-w-[160px] w-[100%]">
      <Image
        src="/logo.svg"
        width={160}
        height={33}
        alt="The site logo"
        priority
      />
    </div>
  ) : (
    <Link href="/" className="max-w-[160px] w-[100%]">
      <Image
        src="/logo.svg"
        width={160}
        height={33}
        alt="The site logo"
        priority
      />
    </Link>
  );
};
