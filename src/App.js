import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const KEY = "ac809abf3f644f15884a69a96aa88f9c";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchRecipes() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&query=${query}.`
      );
      const data = await res.json();
      const results = data.results;

      setRecipe(results);
    }
    fetchRecipes();
  }, [query]);
  return (
    <div className="App">
      <Navbar query={query} setQuery={setQuery} />
      <Main recipe={recipe} apiKey={KEY} />
    </div>
  );
}

export default App;
