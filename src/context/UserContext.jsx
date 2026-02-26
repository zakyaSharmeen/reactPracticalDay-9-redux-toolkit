// import { createContext, useState } from "react";

// // 1. Create Context
// export const UserContext = createContext();

// // 2. Create Provider Component
// export const UserProvider = ({ children }) => {
//   const [data, setData] = useState([]);

//   return (
//     <UserContext.Provider value={{ data, setData }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
import { createContext, useState } from "react";
import { food_items } from "../Food";
export const dataContext = createContext();

function UserContext({ children }) {
  let [input, setInput] = useState("");
  let [cate, setCate] = useState(food_items);
  let [showCart, setShowCart] = useState(false);

  let data = {
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart,
  };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
}

export default UserContext;
