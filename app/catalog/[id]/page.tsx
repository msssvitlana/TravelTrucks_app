import { getCamperDetails } from '@/lib/api';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import CamperDetailsClient from './CamperDetails.client';

type Props = {
  params: Promise<{ id: string }>;
};

const CamperDetails = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();
  //   const camper = await getCamperDetails(id);

  await queryClient.prefetchQuery({
    queryKey: ['camper', id],
    queryFn: () => getCamperDetails(id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetailsClient />;
    </HydrationBoundary>
  );
};
export default CamperDetails;
