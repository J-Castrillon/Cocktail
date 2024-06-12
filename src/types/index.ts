import { InferInput } from "valibot";
import { CategoriesAPIResponseSchema, CategoryForm, DrinkAPIResponse, DrinksAPIResponse, RecipeAPIResponseSchema } from "../schema/recipes-schema";

export type Categories = InferInput<typeof CategoriesAPIResponseSchema>
export type CategoryDraft = InferInput<typeof CategoryForm>
export type Drinks = InferInput<typeof DrinksAPIResponse>
export type Drink = InferInput<typeof DrinkAPIResponse>
export type Recipe = InferInput<typeof RecipeAPIResponseSchema>