import { useState } from "react";

const food_items = [
  {
    id: 1,
    food_name: "Pancakes",
    food_category: "breakfast",
    price: 200,
  },
  {
    id: 2,
    food_name: "Tomato Soup",
    food_category: "soup",
    price: 150,
  },
  {
    id: 3,
    food_name: "Chicken Soup",
    food_category: "soup",
    price: 250,
  },
];

const Category = [{ name: "All" }, { name: "breakfast" }, { name: "soup" }];

function PracticeSearch() {
  const [data, setData] = useState(food_items);
  const [active, setActive] = useState("All");

  const filterItems = (categoryName) => {
    setActive(categoryName);

    if (categoryName === "All") {
      setData(food_items);
    } else {
      const filtered = food_items.filter(
        (item) => item.food_category === categoryName,
      );
      setData(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8">🍽 Food Menu</h1>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {Category.map((item, index) => (
          <button
            key={index}
            onClick={() => filterItems(item.name)}
            className={`px-6 py-2 rounded-full font-medium transition duration-300
              ${
                active === item.name
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-700 shadow-md hover:bg-green-100"
              }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{item.food_name}</h2>
            <p className="text-gray-500 mb-4 capitalize">
              Category: {item.food_category}
            </p>
            <p className="text-green-600 font-bold text-lg">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PracticeSearch;
