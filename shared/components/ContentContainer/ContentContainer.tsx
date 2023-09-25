import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-max-[1440px] mx-auto w-full px-[50px]">{children}</div>
  );
};
