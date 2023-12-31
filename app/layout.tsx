import './globals.css';
import type { Metadata } from 'next';

import Navbar from '@/Organism/Navbar';

export const metadata: Metadata = {
  title: 'Blogger',
  description: 'Generated by Mod_Ranjan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="relative flex flex-col min-h-screen">
          <Navbar />

          <section className="flex-1 py-[5rem] px-4">{children}</section>
        </div>
      </body>
    </html>
  );
}
