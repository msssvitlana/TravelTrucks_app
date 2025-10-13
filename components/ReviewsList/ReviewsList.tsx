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
              <div className={css.ratingIcon}>
                <svg width={16} height={16}>
                  <use href="/icons/filters.svg#icon-Property-1Pressed" />
                </svg>
                {review.reviewer_rating}
                <p className={css.comment}>{review.comment}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
