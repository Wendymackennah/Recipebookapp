
import React, { useState } from "react";
import RecipeList from "/home/wendymackennah/Recipe Food App/recipe-book-app/src/Components /RecipeList.js";
import RecipeForm from "/home/wendymackennah/Recipe Food App/recipe-book-app/src/Components /RecipeForm.js";
import RecipeDetails from "/home/wendymackennah/Recipe Food App/recipe-book-app/src/Components /RecipeDetails.js";
import { Container, Button, Typography, Box } from "@mui/material";

const sampleRecipes = [
  {
    name: "Pasta",
    description: "A classic Italian dish.",
    ingredients: ["Pasta", "Tomato Sauce", "Cheese", "Olive Oil"],
    instructions: "Boil the pasta, add sauce, and top with cheese.",
    favorite: false
  },
  {
    name: "Chicken Curry",
    description: "A spicy and flavorful chicken dish.",
    ingredients: ["Chicken", "Curry Powder", "Coconut Milk", "Onions"],
    instructions: "Cook the onions, add chicken and spices, simmer in coconut milk.",
    favorite: false
  },
  {
    name: "Caesar Salad",
    description: "A fresh and crunchy salad.",
    ingredients: ["Lettuce", "Caesar Dressing", "Croutons", "Parmesan"],
    instructions: "Toss lettuce with dressing, add croutons and cheese.",
    favorite: false
  },
  {
    name: "Chocolate Cake",
    description: "A rich and moist dessert.",
    ingredients: ["Flour", "Cocoa Powder", "Sugar", "Eggs", "Butter"],
    instructions: "Mix ingredients, pour into a pan, and bake until done.",
    favorite: false
  }
];

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, { ...recipe, favorite: false }]);
    setIsFormOpen(false);
  };

  const toggleFavorite = (name) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.name === name ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  const filteredRecipes = showFavorites
    ? recipes.filter((recipe) => recipe.favorite)
    : recipes;

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Recipe Book
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsFormOpen(true)}
        >
          Add Recipe
        </Button>
        <Button
          variant="contained"
          color={showFavorites ? "secondary" : "default"}
          onClick={() => setShowFavorites((prev) => !prev)}
        >
          {showFavorites ? "Show All" : "Show Favorites"}
        </Button>
      </Box>

      {selectedRecipe ? (
        <RecipeDetails recipe={selectedRecipe} onBack={handleBack} />
      ) : (
        <RecipeList
          recipes={filteredRecipes}
          onRecipeSelect={handleRecipeSelect}
          onToggleFavorite={toggleFavorite}
        />
      )}

      <RecipeForm open={isFormOpen} onClose={() => setIsFormOpen(false)} onSubmit={addRecipe} />
    </Container>
  );
}

export default App;
