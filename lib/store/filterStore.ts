import { create } from 'zustand';
import { fetchCampers } from '@/lib/api';
import { Camper, Filter } from '@/types/camper';

interface CamperStore {
  campers: Camper[];
  filters: Filter;
  page: number;
  isLoading: boolean;
  hasMore: boolean;
  setFilters: (filters: Partial<Filter>) => void;
  loadCampers: (append?: boolean) => Promise<void>;
  resetCampers: () => void;
}

export const useCamperStore = create<CamperStore>((set, get) => {
  const limit = 4;

  const loadCampers = async (append = false) => {
    const { filters, page, campers, isLoading, hasMore } = get();
    if (isLoading || !hasMore) return;

    set({ isLoading: true });

    try {
      const response = await fetchCampers(filters, page, limit);
      const newCampers = response.items;

      if (newCampers.length === 0) {
        set({ isLoading: false, hasMore: false });
        return;
      }
      const hasMoreData = newCampers.length === limit;

      set({
        campers: append ? [...campers, ...newCampers] : newCampers,
        isLoading: false,
        hasMore: hasMoreData,
        page: append ? page + 1 : 2,
      });
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  };

  return {
    campers: [],
    filters: { location: '', type: '', equipment: [] },
    page: 1,
    isLoading: false,
    hasMore: true,

    setFilters: (newFilters) =>
      set((state) => ({
        filters: { ...state.filters, ...newFilters },
        page: 1,
        campers: [],
        hasMore: true,
      })),

    loadCampers,
    resetCampers: () => set({ campers: [], page: 1, hasMore: true }),
  };
});
