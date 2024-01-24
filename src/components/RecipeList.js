import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipe, onSelectRecipe }) {
  const containerStyle = {
    backgroundColor: "#F5F5DC",
    margin: "0 30px",
    borderRadius: "10px",
    padding: "20px",
  };
  return (
    <ul style={containerStyle}>
      <h1>Recipe List</h1>
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
