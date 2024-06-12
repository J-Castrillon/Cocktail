import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore"
import { DrinkCard } from "../components/DrinkCard";

export const Index = () => {

  const drinks = useAppStore(state => state.drinks);

  const hasDrinks = useMemo(() => drinks.drinks.length > 0,[drinks])

  return (
    <>
        <h1 className="text-6xl font-extrabold">Recetas</h1>
      {
        hasDrinks ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10">
            {drinks.drinks.map(drink => {
              return (
                <DrinkCard key={drink.idDrink} drink={drink}/>
              )
            })}
          </div>
        ) : 
        (
          <p className="my-10 text-center text-2xl">No hay resultados</p>
        )
      }
    </>
  )
}

export default Index;