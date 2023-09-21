import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import clsx from 'clsx';
import './globals.scss';
import { Header } from '@/components/Header/Header';

const dm_sans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Castaway',
  description: 'Create your own podcast with interesting stories.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClasses = clsx(
    dm_sans.className,
    'flex flex-col min-h-screen w-full bg-main-background-color text-main-text-color'
  );
  return (
    <html lang="en">
      <body className={bodyClasses}>
        <Header />
        {children}
      </body>
    </html>
  );
}
