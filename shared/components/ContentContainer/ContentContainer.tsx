import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<ContainerProps> = ({ children }) => {
  return <div className="content-container">{children}</div>;
};
