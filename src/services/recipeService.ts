import axios from "axios";
import { parse } from "valibot";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
} from "../schema/recipes-schema";
import { CategoryDraft, Drink } from "../types";

export const getCategories = async () => {
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}list.php?c=list`;
  const { data } = await axios(url);

  const response = parse(CategoriesAPIResponseSchema, data);

  if (response) return response;
};

export const getRecipes = async (filters: CategoryDraft) => {
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}filter.php?c=${
    filters.category
  }&i=${filters.ingredient}`;

  const { data } = await axios(url);

  const result = parse(DrinksAPIResponse, data);

  if (result) return result;
};

export const getDrinkDetail = async (drink: Drink) => {
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}lookup.php?i=${
    drink.idDrink
  }`;
  const { data } = await axios(url);

  const result = parse(RecipeAPIResponseSchema, data?.drinks[0]);
  if (result) return result;
};
