import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const KEY = "75381cdd0ba840c084b5e13a74aa9e73";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const tempQuery = "pizza";

  function handleSelectRecipe(id) {
    setSelectedId(id);
  }

  useEffect(() => {
    async function fetchRecipes() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&query=${tempQuery}.`
      );
      const data = await res.json();
      const results = data.results;

      setRecipe(results);
      console.log(results);
    }
    fetchRecipes();
  }, [query]);
  return (
    <div className="App">
      <Navbar query={query} setQuery={setQuery} />
      <Main
        recipe={recipe}
        onSelectRecipe={handleSelectRecipe}
        selectedId={selectedId}
        apiKey={KEY}
      />
    </div>
  );
}

export default App;
