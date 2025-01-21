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
      categories: ["Indoor Plants"],
      isInCart: false,
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 19.99,
      description: "Adds beauty and purifies air.",
      categories: ["Indoor Plants"],
      isInCart: false,
    },
    {
      id: 3,
      name: "Pothos",
      price: 39.99,
      description: "A trailing vine.",
      categories: ["Indoor Plants"],
      isInCart: false,
    },
    {
      id: 4,
      name: "Fiddle Leaf Fig",
      price: 49.99,
      description: "Large leaves houseplant.",
      categories: ["Indoor Plants"],
      isInCart: false,
    },
    {
      id: 5,
      name: "Spider Plant",
      price: 15.99,
      description: "A resilient indoor plant.",
      categories: ["Indoor Plants"],
      isInCart: false,
    },
    {
      id: 6,
      name: "Monstera",
      price: 59.99,
      description: "Known for its unique leaf patterns.",
      categories: ["Indoor Plants"],
      isInCart: false,
    },

    {
      id: 7,
      name: "Succulent Mix",
      price: 24.99,
      description: "Beautiful succulents.",
      categories: ["Succulents"],
      isInCart: false,
    },
    {
      id: 8,
      name: "Aloe Vera",
      price: 12.99,
      description: "Great for skin care.",
      categories: ["Succulents"],
      isInCart: false,
    },
    {
      id: 9,
      name: "Jade Plant",
      price: 22.99,
      description: "A symbol of good luck.",
      categories: ["Succulents"],
      isInCart: false,
    },
    {
      id: 10,
      name: "Echeveria",
      price: 9.99,
      description: "Perfect for decorative arrangements.",
      categories: ["Succulents"],
      isInCart: false,
    },
    {
      id: 11,
      name: "Cactus Assortment",
      price: 19.99,
      description: "Includes various types of cacti.",
      categories: ["Succulents"],
      isInCart: false,
    },
    {
      id: 12,
      name: "Haworthia",
      price: 14.99,
      description: "Low maintenance and attractive.",
      categories: ["Succulents"],
      isInCart: false,
    },

    {
      id: 13,
      name: "Golden Barrel",
      price: 29.99,
      description: "Round cactus with golden spines.",
      categories: ["Cacti"],
      isInCart: false,
    },
    {
      id: 14,
      name: "Bunny Ear Cactus",
      price: 15.99,
      description: "Named for its ear-like pads.",
      categories: ["Cacti"],
      isInCart: false,
    },
    {
      id: 15,
      name: "Christmas Cactus",
      price: 25.99,
      description: "Blooms during the holiday season.",
      categories: ["Cacti"],
      isInCart: false,
    },
    {
      id: 16,
      name: "Prickly Pear",
      price: 35.99,
      description: "Noted for its edible fruit.",
      categories: ["Cacti"],
      isInCart: false,
    },
    {
      id: 17,
      name: "Saguaro",
      price: 45.99,
      description: "Iconic shape associated with deserts.",
      categories: ["Cacti"],
      isInCart: false,
    },
    {
      id: 18,
      name: "Old Man Cactus",
      price: 29.99,
      description: "Covered in long, white hair.",
      categories: ["Cacti"],
      isInCart: false,
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


