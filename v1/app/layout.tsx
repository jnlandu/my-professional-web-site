import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Okapi AI - AI Solutions for Business',
  description: 'Transform your business with cutting-edge AI solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navbar />
        {children}


        <footer className="py-12 bg-black/90 text-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-gray-400">
              &copy; 2024 Okapi AI. All rights reserved.
            </p>
            {/* <p className="text-gray-400">
              Made with ❤️ by the Okapi AI team
            </p> */}
          </div>
        </footer>
      </body>
    </html>
  );
}