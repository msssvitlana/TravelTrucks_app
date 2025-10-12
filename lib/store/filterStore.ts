import { create } from 'zustand';
import { Filter, CamperListResponse, Camper } from '@/types/camper';

const initialFilters: Filter = {
  location: '',
  type: '',
  equipment: [],
};

type CamperStore = {
  campers: Camper[];
  filters: Filter;
  page: number;
  limit: number;
  hasMore: boolean;
  isLoading: boolean;
  setFilters: (filters: Filter) => void;
  fetchCampers: (isLoadMore?: boolean) => Promise<void>;
  loadMoreCampers: () => Promise<void>;
  resetCampers: () => void;
};

export const useCamperStore = create<CamperStore>((set, get) => ({
  campers: [],
  filters: initialFilters,
  page: 1,
  limit: 4,
  hasMore: true,
  isLoading: false,

  setFilters: (filters) =>
    set({
      filters,
      campers: [],
      page: 1,
      hasMore: true,
    }),

  resetCampers: () => {
    set({
      campers: [],
      page: 1,
      hasMore: true,
    });
  },

  fetchCampers: async (isLoadMore = false) => {
    const { filters, page, limit, campers } = get();
    const nextPage = isLoadMore ? page + 1 : 1;

    set({ isLoading: true });

    try {
      const params = new URLSearchParams();

      if (filters.location && filters.location.trim()) {
        params.append('location', filters.location.trim());
      }

      if (filters.type && filters.type.trim()) {
        params.append('type', filters.type.trim());
      }

      if (filters.equipment && filters.equipment.length > 0) {
        filters.equipment.forEach((eq) => {
          if (eq.trim()) params.append('equipment', eq.trim());
        });
      }

      params.append('page', nextPage.toString());
      params.append('limit', limit.toString());

      const response = await fetch(`/api/campers?${params.toString()}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: CamperListResponse = await response.json();

      set({
        campers: isLoadMore ? [...campers, ...data.items] : data.items,
        page: nextPage,
        hasMore: data.items.length === limit,
      });
    } catch (error) {
      console.error('Error fetching campers:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  loadMoreCampers: async () => {
    const { fetchCampers } = get();
    await fetchCampers(true);
  },
}));
