import { StateCreator } from "zustand";
import { Recipe } from "../types";
import {
  NotificationSliceType,
  createNotificationSlice,
} from "./notificationSlice";

export type FavoritesSliceType = {
  favorites: Recipe[];
  addingFavorites: (recipe: Recipe) => void;
  isFavorite: (id: Recipe["idDrink"]) => boolean;
  loadFavorites: () => void;
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (
  set,
  get,
  api
) => ({
  favorites: [],
  addingFavorites: (data) => {
    const existFavorite = get().isFavorite(data.idDrink);

    if (!existFavorite) {
      set((state) => ({
        ...state,
        favorites: [...state.favorites, data],
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: "Se agregó favoritos", 
        error: false
      })
    } else {
      set((state) => ({
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== data.idDrink
        ),
        modal: false,
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: "Se elimino de favoritos", 
        error: false
      })
    }

    localStorage.setItem("favoriteDrinks", JSON.stringify(get().favorites));
  },
  isFavorite: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },
  loadFavorites: () => {
    const storage = localStorage.getItem("favoriteDrinks");

    if (storage) {
      set((state) => ({
        ...state,
        favorites: JSON.parse(storage),
      }));
    }
  },
});
