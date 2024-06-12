import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../types";

type DrinkCardProps = {
  drink: Drink;
};

export const DrinkCard = ({ drink }: DrinkCardProps) => {

    const selectRecipe = useAppStore((state) => state.selectRecipe);

    const handleViewRecipe = (drink: Drink) => {
        selectRecipe(drink);
    }

  return (
    <div className="border shadow-lg">
      <div className="overflow-hidden">
        <img src={drink.strDrinkThumb} alt={`Imagen de: ${drink.strDrink}`} className="hover:scale-105 hover:-rotate-2 transition-transform duration-200"/>
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
        <button
          type="button"
          className=" rounded-md bg-orange-600 hover:bg-orange-700 text-white mt-5 w-full p-3 font-bold text-lg"
          onClick={() => handleViewRecipe(drink)}
        >Ver receta</button>
      </div>
    </div>
  );
};
