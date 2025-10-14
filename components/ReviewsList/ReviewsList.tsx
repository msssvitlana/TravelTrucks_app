import React from 'react';
import css from './ReviewsList.module.css';
import { Review } from '@/types/camper';

type Props = {
  reviews: Review[];
};

const ReviewsList = ({ reviews }: Props) => {
  if (!reviews || reviews.length === 0) {
    return <p className={css.empty}>No reviews yet.</p>;
  }
  const renderStars = (rating: number) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg key={i} width={16} height={16}>
          <use
            href={`/icons/filters.svg#${i < rating ? 'icon-Property-1Pressed' : 'icon-Property-Star'}`}
          />
        </svg>,
      );
    }

    return <div className={css.stars}>{stars}</div>;
  };

  return (
    <div className={css.reviewsWrapper}>
      <ul className={css.list}>
        {reviews.map((review, index) => (
          <li key={index} className={css.item}>
            <div className={css.userAvatar}>
              <p className={css.userAvatarName}>{review.reviewer_name.charAt(0).toUpperCase()}</p>
            </div>
            <div className={css.header}>
              <div className={css.name}>{review.reviewer_name}</div>
              <div className={css.ratingIcon}>{renderStars(review.reviewer_rating)}</div>
              <p className={css.comment}>{review.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
