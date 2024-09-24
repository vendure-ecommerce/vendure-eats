import Providers from '@/app/providers';
import { Navbar } from '@/components/layout/Navbar';
import { cn } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { PropsWithChildren } from 'react';
import './global.css';

const headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-heading',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <html lang="en" className={cn([GeistSans.variable, headingFont.variable])}>
        <body>
          <Navbar></Navbar>
          {children}
        </body>
      </html>
    </Providers>
  );
}
