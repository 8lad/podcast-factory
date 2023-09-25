'use client';

import { ContentContainer } from '@/shared/components/ContentContainer/ContentContainer';
import React from 'react';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { HeaderNavigation } from './HeaderNavigation/HeaderNavigation';

export const Header = () => {
  return (
    <header className="w-full py-[24px] min-h-67 fixed top-0 left-0 right-0">
      <ContentContainer>
        <div className="flex w-full justify-between">
          <HeaderLogo />
          <HeaderNavigation />
        </div>
      </ContentContainer>
    </header>
  );
};
