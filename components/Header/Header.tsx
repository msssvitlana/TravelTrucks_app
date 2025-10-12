import css from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        <Image src="/icons/header.svg" alt="header logo" width={136} height={16} aria-hidden />
      </Link>
      <nav className="navContainer">
        <ul className={css.navigation}>
          <li className={css.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={css.navItem}>
            <Link href="/campers">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
