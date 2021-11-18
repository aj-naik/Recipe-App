import React, { useContext } from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from './App'

export default function Recipe(props) {
    const { handleRecipeDelete } = useContext(RecipeContext)
    const {id, name, cookTime, servings, instructions, ingredients} = props
    return (
        <div className ="recipe">
           <div className ="recipe__header"> 
               <h3 className = "recipe__title"> {name} </h3>
            </div> 
            <div>
                <button className = "btn btn--primary mr-1">Edit</button>
                <button className = "btn btn--danger" onClick = {() => handleRecipeDelete(id)}>Delete</button>
            </div>
            <div className = "recipe__row">
                <span className = "recipe__label">Cooking Time : </span>
                <span className = "recipe__value">{cookTime}</span>
            </div>
            <div className = "recipe__row">
                <span className = "recipe__label">Servings : </span>
                <span className = "recipe__value">{servings}</span>
            </div>
            <div className = "recipe__row">
                <span className = "recipe__label">Ingredients : </span>
                <div className = "recipe__value recipe__value--intended">
                    <IngredientList ingredients={ingredients}/>
                </div>
            <div className = "recipe__row">
                <span className = "recipe__label">Instructions : </span>
                <div className = "recipe__value recipe__instructions recipe__value--intended">
                    {instructions}
                </div>
            </div>
            </div>
        </div>
    )
}
