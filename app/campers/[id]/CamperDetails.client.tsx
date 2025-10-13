'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getCamperDetails } from '@/lib/api';
import css from './CamperDetails.module.css';
import BookingForm from '@/components/BookingForm/BookingForm';
import ReviewsList from '@/components/ReviewsList/ReviewsList';
import Image from 'next/image';
import FeaturesList from '@/components/FeturesList/FeaturesList';

const CamperDetailsClient = () => {
  const params = useParams();
  const id = params?.id as string;

  const [activeTab, setActiveTab] = useState<'features' | 'reviews'>('features');

  const {
    data: item,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['camper', id],
    queryFn: () => getCamperDetails(id),
    enabled: !!id,
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !item) return <p>Some error occurred...</p>;

  return (
    <div className={css.itemWrapper}>
      <div className={css.textWrapper}>
        <h2 className={css.name}>{item.name}</h2>
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
        <p className={css.price}>€{item.price.toFixed(2)}</p>

        <div className={css.gallery}>
          {item.gallery.map((img, index) => (
            <div key={index} className={css.imageWrapper}>
              <Image
                src={img.original}
                alt={`${item.name} photo ${index + 1}`}
                width={292}
                height={320}
                className={css.image}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <p className={css.description}>{item.description}</p>

        <div className={css.btnContainer}>
          <button
            className={`${css.tabButton} ${activeTab === 'features' ? css.active : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button
            className={`${css.tabButton} ${activeTab === 'reviews' ? css.active : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>
        <div className={css.wrapper}>
          <div className={css.tabContent}>
            {activeTab === 'features' && <FeaturesList item={item} />}
            {activeTab === 'reviews' && <ReviewsList reviews={item.reviews} />}
          </div>

          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default CamperDetailsClient;
