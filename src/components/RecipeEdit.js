import React from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="btn recipe-edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlfor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="recipe-edit__input"
        />
        <label htmlfor="cooktime" className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          name="cooktime"
          id="cooktime"
          className="recipe-edit__input"
        />
        <label htmlfor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          name="servings"
          id="servings"
          min="1"
          className="recipe-edit__input"
        />
        <label htmlfor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          className="recipe-edit__input"
        ></textarea>
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit />
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  );
}

export default RecipeEdit;
