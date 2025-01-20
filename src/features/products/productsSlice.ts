import { createSlice } from "@reduxjs/toolkit";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  categories: string[];
  isInCart?: boolean;
}

interface IProductsState {
  items: IProduct[];
}

const initialState: IProductsState = {
  items: [
    {
      id: 1,
      name: "Snake Plant",
      price: 29.99,
      description: "A hardy houseplant.",
      categories: ["Indoor Plants", "Easy Care"],
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 19.99,
      description: "Adds beauty and purifies air.",
      categories: ["Indoor Plants", "Flowering Plants"],
    },
    {
      id: 3,
      name: "Pothos",
      price: 39.99,
      description: "A trailing vine.",
      categories: ["Indoor Plants", "Trailing Plants"],
    },
    {
      id: 4,
      name: "Succulent Mix",
      price: 24.99,
      description: "Beautiful succulents.",
      categories: ["Succulents", "Easy Care"],
    },
    {
      id: 5,
      name: "Fiddle Leaf Fig",
      price: 49.99,
      description: "Large leaves houseplant.",
      categories: ["Indoor Plants", "Large Plants"],
    },
    {
      id: 6,
      name: "Cactus Collection",
      price: 19.99,
      description: "Assorted cacti.",
      categories: ["Cacti", "Desert Plants"],
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleInCart: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.isInCart = !product.isInCart;
      }
    },
  },
});

export const { toggleInCart } = productsSlice.actions;
export const selectProducts = (state: { products: IProductsState }) =>
  state.products.items;

export default productsSlice.reducer;
