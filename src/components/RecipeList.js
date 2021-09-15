import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, handleRecipeAdd }) {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe {...recipe} key={recipe.id} />;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button onClick={handleRecipeAdd} className="btn btn--primary">
          Add Recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeList;
