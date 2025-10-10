import { Camper } from '@/types/camper';
import Image from 'next/image';
import css from './CamperItem.module.css';
// import Link from 'next/link';
type Props = {
  item: Camper;
};

const CamperItem = ({ item }: Props) => {
  return (
    <div className={css.container}>
      <li className={css.itemWrapper}>
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
            <p className={css.price}>€{item.price}</p>
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

          <button className={css.btn}>Show more</button>
        </div>
      </li>
    </div>
  );
};
export default CamperItem;
