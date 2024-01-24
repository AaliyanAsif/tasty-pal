import React, { useEffect, useState } from "react";
import IngredientName from "./IngredientName";

export default function RecipeDetails({
  selectedId,
  apiKey,
  onSetFav,
  onCloseRecipe,
}) {
  const [recipe, setRecipe] = useState([]);

  const recipeDetailStyle = {
    backgroundColor: "#F5F5DC",
    padding: "30px",
    margin: "0 0 0 30px",
    width: "100%",
    borderRadius: "10px",
  };

  const buttonStyle = {
    padding: "10px",
    border: 0,
    backgroundColor: "#32CD32",
    color: "#fff",
    margin: "50px",
    width: "30vw",
    fontSize: "1rem",
    fontWeight: "600",
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
      setRecipe(data);
    }
    fetchRecipeDetails();
  }, [selectedId, apiKey]);

  function handleClick() {
    const newFav = {
      id: selectedId,
      title,
      image,
    };
    onSetFav(newFav);
    onCloseRecipe();
  }

  return (
    <div style={recipeDetailStyle}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3.5rem" }}>{title}</h1>
        <img src={image} alt="pizza" />

        <button className="hover" style={buttonStyle} onClick={handleClick}>
          Add To Favourite
        </button>
      </div>

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
