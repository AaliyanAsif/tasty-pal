import React from "react";
import RecipeList from "./RecipeList";

export default function Main({ recipe, onSelectRecipe }) {
  return (
    <div>
      <RecipeList recipe={recipe} onSelectRecipe={onSelectRecipe} />
    </div>
  );
}
