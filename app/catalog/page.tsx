import { getCampers } from '@/lib/api';
import CamperList from '@/components/CamperList/CamperList';
const Catalog = async () => {
  const response = await getCampers();

  return (
    <section>{response?.campers?.length > 0 && <CamperList campers={response.campers} />}</section>
  );
};
export default Catalog;
