// src/sagas/cartSaga.ts
import { PayloadAction } from "@reduxjs/toolkit";
import { put, select, takeEvery } from "redux-saga/effects";
import { IProduct, toggleInCart } from "../products/productsSlice";
import { addToCart, removeFromCart } from "./cartSlice";

interface CartItem extends IProduct {
  count: number;
}

const selectCartItemsTyped = (state: { cart: { items: CartItem[] } }) =>
  state.cart.items;

function* handleAddToCart(action: PayloadAction<IProduct>): Generator {
  try {
    const productId = action.payload.id;
    const cartItems: CartItem[] = yield select(selectCartItemsTyped);
    const isInCart = cartItems.some((item) => item.id === productId);

    if (!isInCart) {
      yield put(toggleInCart(productId));
    }
  } catch (error) {
    console.error("Add to cart failed", error);
  }
}

function* handleRemoveFromCart(action: PayloadAction<number>): Generator {
  try {
    yield put(toggleInCart(action.payload));
  } catch (error) {
    console.error("Remove from cart failed", error);
  }
}

// Watcher sagas
function* CartSaga(): Generator {
  yield takeEvery(addToCart.type, handleAddToCart);
  yield takeEvery(removeFromCart.type, handleRemoveFromCart);
}

export default CartSaga;
