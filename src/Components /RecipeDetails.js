
import React from "react";
import { Button, Typography, Box, List, ListItem, ListItemText } from "@mui/material";

function RecipeDetails({ recipe, onBack }) {
  return (
    <Box sx={{ padding: 3, bgcolor: "background.paper", borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom align="center">
        {recipe.name}
      </Typography>
      <Typography variant="body1" paragraph>
        {recipe.description}
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Ingredients:
      </Typography>
      <List>
        {recipe.ingredients.map((ing, index) => (
          <ListItem key={index}>
            <ListItemText primary={ing} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Instructions:
      </Typography>
      <Typography variant="body2" paragraph>
        {recipe.instructions}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={onBack}
        sx={{
          marginTop: 3,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          '&:hover': {
            backgroundColor: '#1976d2', // Darker shade on hover
          },
        }} // Centering the button
      >
        Back
      </Button>
    </Box>
  );
}

export default RecipeDetails;
