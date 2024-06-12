import { create } from "zustand";
import { createRecipesSlice, recipeSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import { NotificationSliceType } from "./notificationSlice";
import { createNotificationSlice } from "./notificationSlice";

// Es necesario crear una union con todos los slice
export const useAppStore = create<recipeSlice & FavoritesSliceType & NotificationSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a), 
  }))
);
