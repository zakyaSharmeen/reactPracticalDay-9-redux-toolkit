import Nav from "../components/Nav";
import Category from "../Category";
import Card from "../components/Card";
import { food_items } from "../Food";
import { useContext } from "react";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import Card2 from "../components/Card2";
import PriceCard from "../components/PriceCard";

function Home() {
  // let [cate, setCate] = useState(food_items);
  // console.log(food_items[0]);
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

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
  let items = useSelector((state) => state.cart);
  console.log(items);
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {!input ? (
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
                }}>
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="w-full  flex flex-wrap gap-5 px-5 justify-center items-center pt-8">
        {cate.length < 1 ? (
          <div className="text-center text-2xl text-green-500 font-semibold pt-5">
            NO FOOD ITEM FOUND
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>

      <div
        className={`w-full md:w-[40vw] h-100% fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto 
        ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <header className="w-100% flex justify-between items-center">
          <span className="text-green-400 text-[18px] font-semibold">
            Order items
          </span>
          <RxCross2
            className="w-30px h-30px text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>
        {items.length < 1 ? (
          <div className="text-center text-2xl text-green-500 font-semibold pt-5">
            YOUR CART IS EMPTY
          </div>
        ) : (
          <>
            <div>
              {items.map((item, index) => (
                <Card2
                  key={index}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                  image={item.image}
                  qty={item.qty}
                />
              ))}
            </div>
            <PriceCard />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
