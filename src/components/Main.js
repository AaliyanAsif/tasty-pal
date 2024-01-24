import React, { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import FavRecipe from "./FavRecipe";

export default function Main({ recipe, apiKey }) {
  const [fav, setFav] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectRecipe(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleSetFav(newFav) {
    setFav((fav) => [...fav, newFav]);
  }

  function handleCloseRecipe() {
    setSelectedId(null);
  }

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
