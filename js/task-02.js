const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul");
console.log(ingredientsList);

ingredients.forEach((value) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = value;
  ingredientsItem.classList.add("item");
  ingredientsList.append(ingredientsItem);
});
