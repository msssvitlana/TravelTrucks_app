import { Metadata } from 'next';
import css from './not-found.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  description: "The page you're looking for doesn't exist or has been moved.",
  openGraph: {
    title: 'Page not found',
    description: "The page you're looking for doesn't exist or has been moved.",
    siteName: 'TravelTrucks',
  },
};

export default function NotFound() {
  return (
    <main className={css.container}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
      <Link className={css.link} href="/">
        Go Back Home
      </Link>
    </main>
  );
}
