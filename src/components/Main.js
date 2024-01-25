import React, { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import FavRecipe from "./FavRecipe";

export default function Main({ recipe, apiKey }) {
  const [selectedId, setSelectedId] = useState(null);

  const [fav, setFav] = useState(function () {
    const storedValue = localStorage.getItem("fav");
    return JSON.parse(storedValue);
  });
  function handleSelectRecipe(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleSetFav(newFav) {
    setFav((fav) => [...fav, newFav]);
  }

  function handleCloseRecipe() {
    setSelectedId(null);
  }

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);
  const containerStyle = {
    display: "flex",
    flexBasis: 1,
    alignItems: "flex-start",
  };
  return (
    <div style={containerStyle}>
      <RecipeList recipe={recipe} onSelectRecipe={handleSelectRecipe} />
      {selectedId ? (
        <RecipeDetails
          selectedId={selectedId}
          apiKey={apiKey}
          onSetFav={handleSetFav}
          onCloseRecipe={handleCloseRecipe}
        />
      ) : (
        <FavRecipe
          recipe={recipe}
          fav={fav}
          setFav={setFav}
          onCloseRecipe={handleCloseRecipe}
        />
      )}
    </div>
  );
}
