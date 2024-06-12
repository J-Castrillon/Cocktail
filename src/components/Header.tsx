import { useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import { useForm } from "react-hook-form";
import { CategoryDraft } from "../types";
import { Errors } from "./Errors";

export const Header = () => {
  const { pathname } = useLocation();
  const [fetchCategories, categories, searchRecipes] =
    useAppStore((state) => [
      state.fetchCategories,
      state.categories,
      state.searchRecipes,
    ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CategoryDraft>();

  useEffect(() => {
    fetchCategories();
  }, []);

  const isHome = useMemo(() => pathname === "/", [pathname]);

  const handleOnSubmit = (data: CategoryDraft) => {
    if (data) {
      searchRecipes(data);
      reset();
    }
  };

  return (
    <header
      className={
        pathname === "/" ? "bg-header bg-center bg-cover" : " bg-slate-800"
      }
    >
      <div className="mx-auto container px-5 py-6">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>
          <nav className="flex flex-row gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 uppercase font-medium transition-transform scale-105 duration-200"
                  : "text-white uppercase font-normal"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 uppercase font-medium transition-transform scale-105 duration-200"
                  : "text-white uppercase font-normal"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>

        {isHome && (
          <form
            className="md:w-1/2 2xl:w-1/3 bg-slate-700 my-32 p-10 rounded-lg shadow-lg space-y-6"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre o ingrediente
              </label>
              <input
                type="text"
                id="ingredient"
                className={`p-3 w-full rounded-lg focus:outline-none ${
                  errors.ingredient &&
                  "border-t-1 border-r-1 border-b-1 border-l-8 border-red-300"
                }`}
                placeholder="Busca por nombre o ingrediente"
                {...register("ingredient", {
                  required: "🚨 Este campo es obligatorio",
                })}
              />
              <Errors>{errors.ingredient?.message}</Errors>
            </div>
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categoría
              </label>
              <select
                id="category"
                className={`p-3 w-full rounded-lg focus:outline-none ${
                  errors.category &&
                  "border-t-1 border-r-1 border-b-1 border-l-8 border-red-300"
                }`}
                {...register("category", {
                  required: "🚨 Este campo es obligatorio",
                })}
              >
                <option value="">Seleccione</option>
                {categories.drinks.map((category) => {
                  return (
                    <option
                      key={category.strCategory}
                      value={category.strCategory}
                    >
                      {category.strCategory}
                    </option>
                  );
                })}
              </select>
              <Errors>{errors.category?.message}</Errors>
            </div>
            <button
              type="submit"
              className="cursor-pointer font-extrabold w-full rounded-lg bg-orange-600 hover:bg-orange-700 text-white p-2 uppercase"
            >
              Buscar recetas
            </button>
          </form>
        )}
      </div>
    </header>
  );
};
