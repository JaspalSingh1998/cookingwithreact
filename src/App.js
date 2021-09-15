import Recipe from "./RecipeList";

function App() {
  return (
    <>
      <Recipe recipes={sampleRecipes} />
    </>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n 2. Put chicken on oven\n 3. Eat Chicken",
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions:
      "1. Put peprika on Pork \n 2. Put Pork on oven \n 3. Eat Pork",
  },
];

export default App;
