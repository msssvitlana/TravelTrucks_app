import css from './page.module.css';
import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Camper Home Page',
  description: "Camper's Catalog App Description",
  openGraph: {
    title: 'Camper Home Page',
    description: 'Camper App Description',
    url: '',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'Camper card',
      },
    ],
  },
};

const Home = () => {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <div className={css.container}>
          <div className={css.textWrapper}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <p className={css.description}>You can find everything you want in our catalog</p>
          </div>

          <Link href="/catalog" className={css.homeBtn}>
            View Now
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
