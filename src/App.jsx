import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import SideBar from "./components/SideBar";

function App() {
  // const [readTime, setReadTime] = useState(0);
  const [recipes, setrecipes] = useState([]);
  const [count, setCount] = useState(0);
  const [isWantToCook, setIsWantToCook] = useState([]);
  const [isCooking, setIsCooking] = useState([]);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    fetch("/recipe.json")
      .then((res) => res.json())
      .then((data) => setrecipes(data));
  }, []);

  const handleWantToCook = (recipe) => {
    console.log(recipe);

    console.log(isWantToCook);
    const exist = isWantToCook.find((elementTitle) => {
      console.log(recipe.recipeName);
      return elementTitle.recipeName === recipe.recipeName;
    });

    console.log(exist);
    if (!exist) {
      const newShowData = [...isWantToCook, recipe];
      setCount(count + 1);
      setIsWantToCook(newShowData);
    } else {
      console.log("exist");
      toast("Already exist");
    }
  };

  const handleCooking = (recipe) => {
    console.log(recipe);
    setCount2(count2 + 1);
    // const exist = isCooking.find(
    //   (elementTitle) => elementTitle === recipe.recipeName
    // );

    // if (exist) {
    //   // toast("Already exist");
    //   // alert("exist");
    // } else {
    const newShowData = [...isCooking, recipe];
    console.log(newShowData);
    setIsCooking(newShowData);
    // }
  };
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>

      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-20 mt-24">
        <div className="md:col-span-2">
          <Recipes
            recipes={recipes}
            key={recipes.id}
            // handleReadTime={handleReadTime}
            handleWantToCook={handleWantToCook}
            handleCooking={handleCooking}></Recipes>
        </div>
        <div className="mt-28">
          <SideBar 
            // readTime={readTime}
            recipes={recipes}
            count={count}
            count2={count2}
            key={recipes.id}
            isWantToCook={isWantToCook}
            isCooking={isCooking}
            setIsCooking={setIsCooking}
            setCount2={setCount2}
            setCount={setCount}
            setIsWantToCook={setIsWantToCook}></SideBar>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
