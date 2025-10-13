'use client';

import { useEffect } from 'react';
import { useCamperStore } from '@/lib/store/filterStore';
import CamperList from '@/components/CamperList/CamperList';
import FilterSidebar from '@/app/campers/FilterSideBar/FilterSideBar';
import css from './page.module.css';

const Catalog = () => {
  const { campers, loadCampers, isLoading, hasMore } = useCamperStore();

  useEffect(() => {
    loadCampers(false);
  }, []);

  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <FilterSidebar />
      </aside>
      <main className={css.camperWrapper}>
        {campers.length > 0 && <CamperList campers={campers} />}
        {hasMore && (
          <button
            className={css.loadMoreBtn}
            onClick={() => loadCampers(true)}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        )}
      </main>
    </div>
  );
};

export default Catalog;
