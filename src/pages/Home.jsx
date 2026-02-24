import Nav from "../components/Nav";
import Category from "../Category";
import Card from "../components/Card";
import { food_items } from "../Food";
// import { RxCross2 } from "react-icons/rx";

function Home() {
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
        {Category.map((item) => {
          return (
            <div className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200">
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div>
      <div>
        {food_items.map((item) => {
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
