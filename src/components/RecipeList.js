import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipe, onSelectRecipe }) {
  return (
    <ul>
      {recipe?.map((recipe) => (
        <Recipe
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          img={recipe.image}
          onSelectRecipe={onSelectRecipe}
        />
      ))}
    </ul>
  );
}
