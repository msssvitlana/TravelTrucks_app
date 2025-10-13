import css from './page.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <div className={css.container}>
          <div className={css.textWrapper}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <p className={css.description}>You can find everything you want in our catalog</p>
          </div>

          <Link href="/campers" className={css.homeBtn}>
            View Now
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
