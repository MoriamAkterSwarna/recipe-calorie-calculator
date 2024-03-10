/* eslint-disable react/prop-types */
import { PiClock } from "react-icons/pi";
import { RiFireLine } from "react-icons/ri";
const RecipeCard = ({
  recipe,
  handleWantToCook,
  isWantToCook,
  handleCooking,
  isCooking,
}) => {
  const {
    image,
    totalCalories,
    ingredients,
    preparationTime,
    recipeName,
    shortDescription,
  } = recipe;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl border ">
        <figure>
          <img
            className="w-[90%] m-4 h-52 object-cover rounded-lg"
            src={image}
            alt="Recipe"
          />
        </figure>
        <div className=" ml-5">
          <h2 className="card-title">{recipeName}</h2>
          <>
            <p className="text-gray-500 mt-2">{shortDescription}</p>
            <hr className="mx-3" />
            <div className="flex flex-col my-3">
              <span className="text-gray-500 font-bold ">
                Ingredients: {ingredients.length}
              </span>
              {ingredients.map(
                (ing, index) => index <= 2 && <li key={index}>{ing}</li>
              )}
            </div>
            <hr className="mx-3" />
          </>
          <div className="mr-4 mb-2 flex justify-between items-center">
            <p className="flex justify-center items-center">
              <PiClock /> {preparationTime}
            </p>

            <p className="flex justify-center items-center">
              {" "}
              <RiFireLine />
              {totalCalories}
            </p>
          </div>
          <div className="card-actions mb-4">
            <button
              onClick={() => handleWantToCook(recipe)}
              className="btn bg-[#0BE58A]">
              Want to Cook{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
