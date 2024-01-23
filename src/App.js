import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

const KEY = "75381cdd0ba840c084b5e13a74aa9e73";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchRecipes() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&query=pizza.`
      );
      const data = await res.json();
      const results = data.results;

      setRecipe(results);
    }
    fetchRecipes();
  }, []);
  return (
    <div className="App">
      <Navbar query={query} setQuery={setQuery} />
    </div>
  );
}

export default App;
