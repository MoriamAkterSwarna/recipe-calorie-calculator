/* eslint-disable react/prop-types */
import RecipeCard from "./RecipeCard";

const Recipes = ({
  recipes: recipes,
  handleWantToCook,
  isWantToCook,
  handleCooking,
  isCooking,
}) => {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Our Recipes</h1>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          eveniet <br /> vitae animi incidunt consequuntur! Voluptatem.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            handleWantToCook={handleWantToCook}
            isWantToCook={isWantToCook}
            handleCooking={handleCooking}
            isCooking={isCooking}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
