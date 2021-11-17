import React from "react";
import RecipeList from "./RecipeList";
import '../css/App.css'

function App() {
  return (
    <RecipeList recipes ={sampleRecipes} />
    
  );
}

const sampleRecipes = [
  {
    id: 1,
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
    id: 2,
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
