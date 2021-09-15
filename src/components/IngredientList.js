import React from "react";
import Ingredient from "./Ingredient";

const IngredientList = ({ ingredients }) => {
  const ingredientElements = ingredients.map((ingredient) => {
    return <Ingredient {...ingredient} key={ingredient.id} />;
  });
  return <div>{ingredientElements}</div>;
};

export default IngredientList;
