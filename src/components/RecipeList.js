import React from "react";
import Recipe from "./Recipe";

export default function RecipeList(props) {
  const { recipes, handleRecipeAdd, handleRecipeDelete } = props;
  return (
    <div className="RecipeList">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id}
          handleRecipeDelete = {handleRecipeDelete}          
          {...recipe} />;
        })}
      </div>
      <div className="RecipeList__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
