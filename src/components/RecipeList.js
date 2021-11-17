import React from 'react'
import Recipe from './Recipe'

export default function RecipeList( { recipes }) {
    return (
        <div className='RecipeList'>
        <div>
            {recipes.map(recipe => {
               return <Recipe 
               key={recipe.id} 
               {...recipe}
               />
            })}
        </div>
        <div className= 'RecipeList__add-recipe-btn-container'>
        <button className="btn btn--primary
        ">Add Recipe</button>
        </div>
        </div>
        
    )
}
