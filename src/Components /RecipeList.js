
import React, { useState } from "react";
import { Button, Typography, TextField, List, ListItem, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function RecipeList({ recipes, onRecipeSelect, onToggleFavorite }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter recipes based on search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Recipe List
      </Typography>
      
      {/* Search Input */}
      <TextField
        label="Search Recipes"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        fullWidth
        style={{ marginBottom: "20px" }}
      />

      <List>
        {filteredRecipes.map((recipe, index) => (
          <ListItem
            key={index}
            style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}
            onClick={() => onRecipeSelect(recipe)}
          >
            <Typography variant="body1">
              {recipe.name} - {recipe.description}
            </Typography>

            {/* Favorite Icon */}
            <IconButton
              onClick={(e) => {
                e.stopPropagation(); // Prevents onRecipeSelect from triggering
                onToggleFavorite(recipe.name);
              }}
              edge="end"
            >
              {recipe.favorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default RecipeList;
