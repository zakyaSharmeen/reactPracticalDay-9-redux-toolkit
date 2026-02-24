import Nav from "../components/Nav";
import Category from "../Category";
import Card from "../components/Card";
import { food_items } from "../Food";
import { useState } from "react";

// import { RxCross2 } from "react-icons/rx";

function Home() {
  let [cate, setCate] = useState(food_items);
  // console.log(food_items[0]);

  const filter = (name) => {
    if (name === "All") {
      setCate(food_items);
    } else {
      const filteredItems = food_items.filter(
        (item) => item.food_category === name,
      );
      setCate(filteredItems);
    }
  };
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
        {Category.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200"
              // onClick={() => filter(item.name)}
              onClick={() => {
                filter(item.name);
                console.log("Clicked category:", `"${item.name}"`);
              }}
            >
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="w-full  flex flex-wrap gap-5 px-5 justify-center items-center pt-8">
        {cate.map((item) => {
          return (
            <Card
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              type={item.food_type}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
