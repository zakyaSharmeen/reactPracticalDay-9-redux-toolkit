import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      let existItem = state.find((item) => item.id === action.payload.id);
      if (existItem) {
        existItem.qty += 1;
        return;
      } else {
        state.push(action.payload);
      }
    },

    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    IncrementQty: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
    },
    DecrementQty: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload && item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
    },
  },
});

export const { AddItem, RemoveItem, IncrementQty, DecrementQty } =
  cardSlice.actions;
export default cardSlice.reducer;
