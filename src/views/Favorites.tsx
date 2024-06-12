import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import { DrinkCard } from "../components/DrinkCard";
import { Link } from "react-router-dom";

export const Favorites = () => {
  const favorites = useAppStore((state) => state.favorites);

  const hasFavorites = useMemo(() => favorites.length, [favorites]);

  return (
    <>
      <h1 className="text-6xl font-extrabold">Favoritos</h1>
      {hasFavorites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10">
          {favorites.map((drink) => {
            return <DrinkCard key={drink.idDrink} drink={drink} />;
          })}
        </div>
      ) : (
        <div className="mx-auto my-10 w-full flex flex-col items-center">
          <p className="text-center text-2xl">No hay bebidas favoritas</p>
          <Link
            to="/"
            className="my-10 w-32 p-2 rounded-lg bg-orange-600 hover:bg-orange-700 cursor-pointer text-center text-white text-xl font-normal"
          >
            Ir a inicio
          </Link>
        </div>
      )}
    </>
  );
};

export default Favorites; 
