import { getCampers } from '@/lib/api';
import CamperList from '@/components/CamperList/CamperList';
import FilterSidebar from '@/app/campers/FilterSideBar/FilterSideBar';
import css from './page.module.css';

const Catalog = async () => {
  const response = await getCampers();
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <FilterSidebar />
      </aside>
      <main className={css.camperWrapper}>
        {response?.items?.length > 0 && <CamperList campers={response.items} />}
      </main>
    </div>
  );
};
export default Catalog;
