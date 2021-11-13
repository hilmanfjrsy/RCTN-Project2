import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    
  },
  reducers: {
    addCart: (state, action) => {
      return null
    },
    removeCart: (state, action) => {
      return null
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
