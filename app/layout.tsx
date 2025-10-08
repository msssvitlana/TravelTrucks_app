import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header/Header';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TravelTrucks App',
  icons: {
    icon: '/icons/favicon.ico',
  },
  description: 'A platform for planning and exploring truck travel routes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="ligtht">
      <body className={`${inter.variable}`}>
        <TanStackProvider>
          <Header />

          <main>{children}</main>

          <footer>
            <p>
              Created <time dateTime="2025">2025</time>
            </p>
          </footer>
        </TanStackProvider>
      </body>
    </html>
  );
}
