import React, { useEffect, useState } from "react";
import IngredientName from "./IngredientName";

export default function RecipeDetails({ selectedId, apiKey }) {
  const [recipe, setRecipe] = useState([]);

  const recipeDetailStyle = {
    backgroundColor: "#F5F5DC",
    padding: "50px",
    margin: "30px",
    width: "100%",
  };

  const {
    title,
    image,
    cuisines,
    instructions,
    readyInMinutes,
    extendedIngredients,
  } = recipe;

  useEffect(() => {
    async function fetchRecipeDetails() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${selectedId}/information?apiKey=${apiKey}`
      );
      const data = await res.json();
      console.log(data);
      setRecipe(data);
    }
    fetchRecipeDetails();
  }, [selectedId, apiKey]);

  return (
    <div style={recipeDetailStyle}>
      <h2>{title}</h2>
      <img src={image} alt="pizza" />

      <div>
        <h4>Ingrediants</h4>
        {extendedIngredients?.map((ing) => (
          <IngredientName name={ing.name} />
        ))}

        <h4>Instructions</h4>
        <p dangerouslySetInnerHTML={{ __html: instructions }}></p>

        <h4>Time to Cook</h4>
        <p>{readyInMinutes} minutes</p>

        <h4>Cuisines</h4>
        <p>
          {cuisines?.map((e) => (
            <span>{e} </span>
          ))}
        </p>
      </div>
    </div>
  );
}
