import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Camper } from '../../types/camper';

type FavoritesProps = {
  favorites: Camper[];
  toggleFavorite: (camper: Camper) => void;
};
export const useFavoritesStore = create<FavoritesProps>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (item) => {
        const favorites = get().favorites;
        const isFavorite = favorites.some((c) => c.id === item.id);

        if (isFavorite) {
          set({ favorites: favorites.filter((c) => c.id !== item.id) });
        } else {
          set({ favorites: [...favorites, item] });
        }
      },
    }),
    {
      name: 'favorites-storage',
    },
  ),
);
