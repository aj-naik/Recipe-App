import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import "../css/App.css";

import { v4 as uuidv4 } from "uuid";
import { SearchBox } from "./SearchBox";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  // useEffect will store and get data to and from local storage. 1st useEffect will check if data is stored and then fetch that data otherwise it will fetch default. 2nd useEffect will store/update new data to local storage
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    // This creates Object of function and Can also be written as handleRecipeAdd:handleRecipeAdd. The shorthand method works only when both key value names are supposed to be same
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  // function to add/edit new recipes
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    };

    // ... is spread operator which iterates over the data and the comma after that will append new data to original data
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  //function to edit recipes
  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  // function to delete recipes
  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <SearchBox placeholder = "Search by Name, Food Type, etc"/>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: uuidv4(),
    name: "Plain Chicken",
    servings: 3,
    cookTime: "0:45",
    instructions:
      "1. Put salt on Chicken \n2. Put tumeric on Chicken \n3. Marinate it in spices and yoghurt \n4. Bake Chicken in Oven at 400 degree F \n5. Eat the Chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "1.5kg",
      },
      {
        id: 2,
        name: "Salt",
        amount: "2 Tbs",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Plain Pork",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on Pork \n2. Put tumeric on Pork \n3. Marinate it in spices and yoghurt \n4. Bake Chicken in Oven at 450 degree F \n5. Eat the Pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "1.5kg",
      },
      {
        id: 2,
        name: "Salt",
        amount: "2 Tbs",
      },
    ],
  },
];

export default App;
