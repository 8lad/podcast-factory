import React from 'react';

interface ContentSectionProps {
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ children }) => {
  return <section className="w-full px-[50px] py-[40px]">{children}</section>;
};
