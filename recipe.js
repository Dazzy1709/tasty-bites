const recipeName = document.getElementById("name");
const recipeDescription = document.getElementById("description");
const recipeIngredients = document.getElementById("ingredients");
const recipeTime = document.getElementById("time");
const recipeSteps = document.getElementById("steps");
const recipeImage = document.getElementById("image");
const recipeForm = document.getElementById("form");


recipeForm.addEventListener('submit', (e) => {

  e.preventDefault();

  const recipeNameValue = recipeName.value;
  const recipeDescriptionValue = recipeDescription.value;
  const recipeIngredientsValue = recipeIngredients.value;
  const recipeTimeValue = recipeTime.value;
  const recipeStepsValue = recipeSteps.value;
  const recipeImageValue = recipeImage.value;
  const recipeBox = document.querySelector('.content-box');

  localStorage.setItem('recipe-name', recipeNameValue);
  localStorage.setItem('recipe-description', recipeDescriptionValue);
  localStorage.setItem('recipe-ingredients', recipeIngredientsValue);
  localStorage.setItem('recipe-time', recipeTimeValue);
  localStorage.setItem('recipe-steps', recipeStepsValue);
  localStorage.setItem('recipe-image', recipeImageValue);

  window.location.href = "home.html";
  
})





