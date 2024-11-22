const recipes = [];

let titleInput = document.getElementById( 'title' );
let ingredientsInput = document.getElementById( 'ingredients' );
let instructionsInput = document.getElementById( 'instructions' );
let recipesList = document.getElementById( 'recipes' );

//Declared index of the recipe to be edited
var indexOfRecipeToBeEdited = -1

// Declared a flag to set the edit mode
var isEditMode = false

// Update a recipe when the "Add Recipe" button is clicked
// If the recipe is new, then add the recipe to the recipes array 
// Use addRecipes() function to add the new recipe
// Else edit the recipe in the recipes array
// Clear the form's input fields using the clearInputFields() function
// Finally, display the recipes using the displayRecipes() function
document.getElementById('add-recipe-btn').addEventListener('click', function() {
    // Write your code here for task 1
    let recipe = {
        title: titleInput.value,
        ingredients: ingredientsInput.value,
        instructions: instructionsInput.value
    }
    const { title, ingredients, instructions } = recipe;

    if( title && ingredients && instructions ) {
        if( !isEditMode ) 
            addRecipe( recipe )
        else {
            if ( indexOfRecipeToBeEdited >= 0 && indexOfRecipeToBeEdited < recipes.length ) 
                recipes[indexOfRecipeToBeEdited] = recipe;
            
            isEditMode = false;
        }

        clearInputFields()
        displayRecipes()

    } else {
        alert("Please fill out all fields.");
        return;
    }
});

// Clear the form's input fields
function clearInputFields() {
    // Write your code here for task 2
    titleInput.value = "";
    ingredientsInput.value = "";
    instructionsInput.value = "";
    
}

// Add the new recipe to the recipes array
function addRecipe(recipe) {
    // Write your code here for task 3
    recipes.push( recipe )
}

// Display Recipes
function displayRecipes() {
    // Write your code here for task 4
    let recipesListHTML = "";

    for ( let [index, recipe] of recipes.entries() ) {
        const { title, ingredients, instructions } = recipe;
        recipesListHTML += `
            <li>
                <p><b>${title}</b></p>
                <p><b>ingredients:</b> ${ingredients}</p>
                <p><b>instructions:</b> ${instructions}</p>
                <button onclick = "editRecipe(${index});">EDIT</button>
                <button onclick = "deleteRecipe(${index});">DELETE</button>
            </li>
        `
    }

    recipesList.innerHTML = recipesListHTML;
}

// Edit the recipe object when the Edit button is clicked
function editRecipe(index) {
    // Write your code here for task 5
    const { title, ingredients, instructions } = recipes[index];

    titleInput.value = title;
    ingredientsInput.value = ingredients;
    instructionsInput.value = instructions;

    isEditMode = true;
    indexOfRecipeToBeEdited = index;
}

// Delete the recipe object when the Delete button is clicked
function deleteRecipe(index){
    if (index >= 0 && index < recipes.length) {
        recipes.splice(index, 1); // Remove 1 element at the specified index
        displayRecipes();
        console.log(recipes)
        clearInputFields();
        isEditMode = false;
    }
}