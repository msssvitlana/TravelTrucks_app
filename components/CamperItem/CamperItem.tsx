'use client';

import { Camper } from '@/types/camper';
import Image from 'next/image';
import css from './CamperItem.module.css';
import Features from '@/components/Features/Features';
import { useFavoritesStore } from '@/lib/store/favouritesStore';
import Link from 'next/link';
import Loader from '@/components/Loader/Loader';
type Props = {
  item: Camper;
};

const CamperItem = ({ item }: Props) => {
  const { favorites, toggleFavorite } = useFavoritesStore();

  const isFavorite = favorites.some((c) => c.id === item.id);

  return (
    <div className={css.itemWrapper}>
      <div className={css.imageWrapper}>
        <Image
          src={item.gallery[0].thumb}
          alt={`${item.name} photo`}
          width={292}
          height={320}
          className={css.image}
          priority
        />
      </div>

      <div className={css.textWrapper}>
        <div className={css.namePrice}>
          <h2 className={css.name}>{item.name}</h2>
          <p className={css.price}>
            €{item.price.toFixed(2)}
            <button
              className={`${css.favBtn} ${isFavorite ? css.active : ''}`}
              onClick={() => toggleFavorite(item)}
            >
              <svg className={css.icon} width={25} height={24}>
                <use href="/icons/filters.svg#icon-Property_1Default1" />
              </svg>
            </button>
          </p>
        </div>

        <div className={css.ratingLocation}>
          <p className={css.rating}>
            <svg className={css.icon} width={16} height={16}>
              <use href="/icons/filters.svg#icon-Property-1Pressed" />
            </svg>
            {item.rating}
          </p>

          <p className={css.location}>
            <svg className={css.icon} width={16} height={16}>
              <use href="/icons/filters.svg#icon-Map1" />
            </svg>
            {item.location}
          </p>
        </div>

        <p className={css.description}>{item.description}</p>
        <Features item={item} />
        <Link href={`/campers/${item.id}`} className={css.btn}>
          Show more
        </Link>
      </div>
    </div>
  );
};
export default CamperItem;
