import React from 'react';
import clsx from 'clsx';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className,
}) => {
  const wrapperClasses = clsx('grow w-full pt-[81px]', className);

  return <main className={wrapperClasses}>{children}</main>;
};
