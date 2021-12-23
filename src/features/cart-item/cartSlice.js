import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) item.quantity += 1;
      else state.cartItems.push({ ...action.payload, quantity: 1 });
    },
  },
});

const selectItems = (state) => state.cart.cartItems;

export const selectItemsCount = createSelector([selectItems], (items) => {
  return items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
