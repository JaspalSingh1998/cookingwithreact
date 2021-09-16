import React from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div>
        <button>&times;</button>
      </div>
      <div>
        <label htmlfor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlfor="cooktime">Cook Time</label>
        <input type="text" name="cooktime" id="cooktime" />
        <label htmlfor="servings">Servings</label>
        <input type="number" name="servings" id="servings" min="1" />
        <label htmlfor="instructions">Instructions</label>
        <textarea name="instructions" id="instructions"></textarea>
      </div>
      <br />
      <label>Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit />
      </div>
      <div>
        <button>Add Ingredient</button>
      </div>
    </div>
  );
}

export default RecipeEdit;
