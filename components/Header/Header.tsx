import { ContentContainer } from '@/shared/components/ContentContainer/ContentContainer';
import React from 'react';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { HeaderNavigation } from './HeaderNavigation/HeaderNavigation';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full py-[24px] min-h-67">
      <ContentContainer>
        <div className="flex w-full justify-between">
          <HeaderLogo />
          <HeaderNavigation />
        </div>
      </ContentContainer>
    </header>
  );
};
