import { getCampers } from '@/lib/api';
import CamperList from '@/components/CamperList/CamperList';
const Catalog = async () => {
  const response = await getCampers();
  console.log(response);
  return (
    <section>{response?.items?.length > 0 && <CamperList campers={response.items} />}</section>
  );
};
export default Catalog;
