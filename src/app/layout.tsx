import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Providers from '@/app/components/providers';
import './globals.css';
import Header from './components/Header/Header';

const font = { className: "font-helvetica" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header/>
        <main className="bg-black min-h-screen -flex flex-col items-center justify-center">
        <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
