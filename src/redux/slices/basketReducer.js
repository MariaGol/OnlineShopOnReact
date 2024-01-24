import { createSlice, current } from "@reduxjs/toolkit";
import { calcPriceAndCount } from "../../utils/utils";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
  totalPriceSale: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const currentItem = state.items.find(
        (obj) => obj.id === action.payload.id
      );
      if (currentItem) {
        currentItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      calcPriceAndCount(state);
    },
    clearCart: (state, action) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      calcPriceAndCount(state);
    },
    decrementItem: (state, action) => {
      const currentItem = state.items.find(
        (obj) => obj.id === action.payload.id
      );
      if (currentItem) {
        currentItem.count--;
      }
      calcPriceAndCount(state);
    },
  },
});

export const { addItem, clearCart, deleteItem, decrementItem } =
  basketSlice.actions;
export default basketSlice.reducer;
