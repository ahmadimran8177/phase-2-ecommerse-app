"use client";

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: "",
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItem = action.payload.id;
    },
    emptyCart: (state, action) => {
      state.cartItem = "";
    },
  },
});

export const { addToCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
