import type { Metadata } from 'next';
import 'modern-normalize';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header/Header';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://travel-trucks-app-ajzh.vercel.app'),
  title: 'CamperRent — оренда кемперів',
  icons: {
    icon: '/icons/favicon.ico',
  },
  description: 'Зручна платформа для оренди кемперів по Україні. Подорожуйте з комфортом!',
  keywords: [
    'оренда кемпера',
    'кемпери Україна',
    'подорож на кемпері',
    'будинок на колесах',
    'кемпер на прокат',
  ],
  openGraph: {
    title: 'CamperRent — оренда кемперів по Україні',
    description: 'Орендуйте сучасний кемпер для подорожей. Відкривайте нові місця з комфортом!',
    url: 'https://travel-trucks-app-ajzh.vercel.app',
    siteName: 'CamperRent',
    images: [
      {
        url: '/image/homePage/Picture.jpg',
        width: 1200,
        height: 630,
        alt: 'CamperRent — сучасні кемпери для оренди в Україні',
      },
    ],
    type: 'website',
    locale: 'uk_UA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CamperRent — оренда кемперів для подорожей',
    description: 'Сучасні будинки на колесах для комфортної мандрівки по Україні.',
    images: ['/image/homePage/Picture.jpg'],
  },
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
        </TanStackProvider>
      </body>
    </html>
  );
}
