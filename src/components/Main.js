import React from "react";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import FavRecipe from "./FavRecipe";

export default function Main({ recipe, onSelectRecipe, selectedId, apiKey }) {
  return (
    <div
      style={{
        display: "flex",
        flexBasis: 1,
        alignItems: "flex-start",
      }}
    >
      <RecipeList recipe={recipe} onSelectRecipe={onSelectRecipe} />
      {selectedId ? (
        <RecipeDetails selectedId={selectedId} apiKey={apiKey} />
      ) : (
        <FavRecipe />
      )}
    </div>
  );
}
