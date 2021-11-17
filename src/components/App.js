import React, { useState } from "react";
import RecipeList from "./RecipeList";
import '../css/App.css'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  // function to add/edit new recipes
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instructions',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Name',
          amount: '1 Tbs'
        }
      ]
    }

    // ... is spread operator which iterates over the data and the comma after that will append new data to original data
    setRecipes([...recipes, newRecipe])
  }

  // function to delete recipes
  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }
  
  return (
    <RecipeList 
      recipes = {recipes} 
      handleRecipeAdd = {handleRecipeAdd}
      handleRecipeDelete = {handleRecipeDelete}
    />
    
  );
}

const sampleRecipes = [
  {
    id: uuidv4(),
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '0:45',
    instructions: "1. Put salt on Chicken \n2. Put tumeric on Chicken \n3. Marinate it in spices and yoghurt \n4. Bake Chicken in Oven at 400 degree F \n5. Eat the Chicken",
    ingredients : [
      {
        id:1,
        name: 'Chicken',
        amount: '1.5kg'
      },
      {
        id:2,
        name: 'Salt',
        amount: '2 Tbs'
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Plain Pork',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on Pork \n2. Put tumeric on Pork \n3. Marinate it in spices and yoghurt \n4. Bake Chicken in Oven at 450 degree F \n5. Eat the Pork",
    ingredients : [
      {
        id:1,
        name: 'Pork',
        amount: '1.5kg'
      },
      {
        id:2,
        name: 'Salt',
        amount: '2 Tbs'
      }
    ]
  }
]

export default App;
