import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  },

  reducers: {

    // ADD ITEM TO CART
    addItem: (state, action) => {

      const { name, image, cost } = action.payload;

      // Check if item already exists
      const existingItem = state.items.find(
        (item) => item.name === name
      );

      if (existingItem) {

        // Increase quantity if item exists
        existingItem.quantity++;

      } else {

        // Add new item
        state.items.push({
          name,
          image,
          cost,
          quantity: 1,
        });

      }
    },

    // REMOVE ITEM FROM CART
    removeItem: (state, action) => {

      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );

    },

    // UPDATE ITEM QUANTITY
    updateQuantity: (state, action) => {

      const { name, quantity } = action.payload;

      // Find item
      const itemToUpdate = state.items.find(
        (item) => item.name === name
      );

      // Update quantity
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }

    },

  },

});

// EXPORT ACTIONS
export const {
  addItem,
  removeItem,
  updateQuantity
} = CartSlice.actions;

// EXPORT REDUCER
export default CartSlice.reducer;