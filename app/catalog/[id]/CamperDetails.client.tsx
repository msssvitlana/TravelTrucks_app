'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getCamperDetails } from '@/lib/api';
const CamperDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: camper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['camper', id],
    queryFn: () => getCamperDetails(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error || !camper) return <p>Some error..</p>;
  return (
    <div>
      <h2>{camper.name}</h2>
      <p>{camper.price}</p>
      <p>{camper.rating}</p>
      <p>{camper.location}</p>
      <p>{camper.description}</p>
      <button>Show more</button>
    </div>
  );
};

export default CamperDetailsClient;
