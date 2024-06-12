import { StateCreator } from "zustand";
import {
  getCategories,
  getDrinkDetail,
  getRecipes,
} from "../services/recipeService";
import { Categories, CategoryDraft, Drink, Drinks, Recipe } from "../types";

export type recipeSlice = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe,
  modal: boolean,
  fetchCategories: () => Promise<void>;
  searchRecipes: (data: CategoryDraft) => Promise<void>;
  selectRecipe: (data: Drink) => Promise<void>;
  closeModal: () => void
};

export const createRecipesSlice: StateCreator<recipeSlice> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  selectedRecipe: {} as Recipe, 
  modal: false,
  fetchCategories: async () => {
    const categories = await getCategories();
    set((state) => ({
      ...state,
      categories,
    }));
  },
  searchRecipes: async (data) => {
    const drinks = await getRecipes(data);
    set((state) => ({
      ...state,
      drinks,
    }));
  },
  selectRecipe: async (data) => {
    const selectedRecipe = await getDrinkDetail(data);
    set(state => ({
      ...state, 
      selectedRecipe, 
      modal: true
    }))
  },
  closeModal: () => {
    set(state => ({
      ...state, 
      modal: false, 
      selectedRecipe: {} as Recipe,
    }))
  }
});
