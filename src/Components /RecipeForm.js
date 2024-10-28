
import React, { useState } from "react";
import { Modal, TextField, Button, Box, Typography } from "@mui/material";

function RecipeForm({ open, onClose, onSubmit }) {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit({
      ...formState,
      ingredients: formState.ingredients.split(",").map((ing) => ing.trim()),
    });
    setFormState({ name: "", description: "", ingredients: "", instructions: "" });
    onClose(); // Close the modal after submission
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          padding: 4,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
          margin: "auto",
          width: { xs: "90%", sm: "400px" }, // Responsive width
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom textAlign="center">
          Add New Recipe
        </Typography>
        
        <TextField
          label="Recipe Name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
          sx={{ backgroundColor: '#f9f9f9' }} // Light background for input
        />
        
        <TextField
          label="Description"
          name="description"
          value={formState.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows={2} // Allows for multiple lines
          sx={{ backgroundColor: '#f9f9f9' }} // Light background for input
        />
        
        <TextField
          label="Ingredients (comma-separated)"
          name="ingredients"
          value={formState.ingredients}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows={2} // Allows for multiple lines
          sx={{ backgroundColor: '#f9f9f9' }} // Light background for input
        />
        
        <TextField
          label="Instructions"
          name="instructions"
          value={formState.instructions}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows={3} // Allows for multiple lines
          sx={{ backgroundColor: '#f9f9f9' }} // Light background for input
        />
        
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          sx={{
            marginTop: 2, // Spacing above the button
            '&:hover': {
              backgroundColor: '#1976d2', // Darker shade on hover
            },
          }}
        >
          Add Recipe
        </Button>
      </Box>
    </Modal>
  );
}

export default RecipeForm;
