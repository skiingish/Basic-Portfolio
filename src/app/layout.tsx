import type { Metadata } from 'next';
import { Belgrano } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const belgrano = Belgrano({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sean Builds Things',
  description: 'Sean Builds Things',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={belgrano.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
