const recipeName = window.localStorage.getItem('recipe-name');
const recipeDescription = window.localStorage.getItem('recipe-description');
const recipeIngredients = window.localStorage.getItem('recipe-ingredients');
const recipeTime = window.localStorage.getItem('recipe-time');
const recipeSteps = window.localStorage.getItem('recipe-steps');
const recipeImage = window.localStorage.getItem('recipe-image');


document.querySelector('.recipe-name').textContent = recipeName;
document.querySelector('.recipe-description').textContent = recipeDescription;
document.querySelector('.time').textContent = recipeTime;
