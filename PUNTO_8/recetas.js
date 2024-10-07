// Base de datos simulada de recetas
const recipes = [
    {
      title: "Ensalada de Quinoa",
      ingredients: ["quinoa", "tomate", "pepino", "limón"]
    },
    {
      title: "Tacos de Pollo",
      ingredients: ["pollo", "tortilla", "aguacate", "cilantro"]
    },
    {
      title: "Smoothie de Frutas",
      ingredients: ["plátano", "fresa", "yogur", "miel"]
    },
    {
      title: "Pasta al Pesto",
      ingredients: ["pasta", "albahaca", "ajo", "piñones"]
    },
    {
      title: "Sopa de Verduras",
      ingredients: ["zanahoria", "apio", "cebolla", "tomate"]
    }
  ];
  
  // Función para mostrar las recetas
  function displayRecipes(filteredRecipes) {
    const recipesList = document.getElementById('recipes-list');
    recipesList.innerHTML = ""; // Limpiar la lista antes de mostrar resultados
  
    if (filteredRecipes.length === 0) {
      recipesList.innerHTML = "<p>No se encontraron recetas.</p>";
      return;
    }
  
    filteredRecipes.forEach(recipe => {
      const recipeItem = document.createElement('div');
      recipeItem.classList.add('recipe-item');
      recipeItem.innerHTML = `
        <div class="recipe-title">${recipe.title}</div>
        <div class="recipe-ingredients">Ingredientes: ${recipe.ingredients.join(', ')}</div>
      `;
      recipesList.appendChild(recipeItem);
    });
  }
  
  // Función para filtrar recetas
  function filterRecipes() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput))
    );
    displayRecipes(filteredRecipes);
  }
  
  // Evento para detectar cambios en el buscador
  document.getElementById('search-input').addEventListener('input', filterRecipes);
  
  // Mostrar todas las recetas al cargar la página
  displayRecipes(recipes);