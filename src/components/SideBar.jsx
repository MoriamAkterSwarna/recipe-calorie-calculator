/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
const SideBar = ({
  count,
  isWantToCook,
  count2,
  isCooking,
  setCount2,
  setIsCooking,
  setIsWantToCook,
  setCount,
}) => {
  console.log(isWantToCook);
  console.log(isCooking);

  const handlePreparing = (recipe) => {
    console.log(recipe);
    setCount2(count2 + 1);
    setCount(count - 1);
    const newShowData = [...isCooking, recipe];
    console.log(newShowData);
    setIsCooking(newShowData);
    const newBookMark = isWantToCook.filter((item) => item !== recipe);
    setIsWantToCook(newBookMark);
  };
  let totalTime = 0;
  let totalCalories = 0;

  for (let i = 0; i < isCooking.length; i++) {
    totalTime += parseFloat(isCooking[i].preparationTime) || 0;
    totalCalories += parseFloat(isCooking[i].totalCalories) || 0;
  }
  return (
    <div className="border-2 p-2 h-1/2">
      <div className="text-center">
        <p className="font-bold text-xl mb-4 mt-4">Want to cook: {count}</p>

        <>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {isWantToCook.map((item, index) => (
                <tr className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{item.recipeName}</td>
                  <td>{item.preparationTime}</td>
                  <td>{item.totalCalories}</td>

                  <td>
                    <button
                      onClick={() => handlePreparing(item)}
                      className="btn bg-emerald-400">
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      </div>
      <div className=" text-center">
        <p className="font-bold text-xl mb-4 mt-4">
          Currently cooking: {count2}
        </p>

        <>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {isCooking.map((item, index) => (
                <tr className="bg-base-200">
                  <td>{index + 1}</td>
                  <td>{item.recipeName}</td>
                  <td>{item.preparationTime}</td>
                  <td>{item.totalCalories}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th className="text-wrap">Total Time = {totalTime} minutes</th>

                <th className="ml-0 text-wrap">
                  Total Calories = {totalCalories} calories
                </th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </>
      </div>
    </div>
  );
};

export default SideBar;
