import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../products/productsSlice";

interface ICartItem extends IProduct {
  count: number;
}

interface ICartState {
  items: ICartItem[];
}

const initialState: ICartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.count += 1; // Increment count
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseCount: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.count += 1;
    },
    decreaseCount: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.count > 0) item.count -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increaseCount, decreaseCount } =
  cartSlice.actions;

export const selectCartItems = (state: { cart: ICartState }) =>
  state.cart.items;

export default cartSlice.reducer;
