import { getCampers } from '@/lib/api';
const Catalog = async () => {
  const campers = await getCampers();
  console.log('campers', campers);

  return <div>Catalog</div>;
};
export default Catalog;
