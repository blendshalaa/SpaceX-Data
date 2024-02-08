// redux/slices/dragonsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    setDragons: (state, action) => {
      return action.payload;
    },
    reserveDragon: (state, action) => {
      const { id } = action.payload;
      const dragon = state.find((item) => item.id === id);
      if (dragon) {
        dragon.reserved = true;
      }
    },
    cancelDragonReservation: (state, action) => {
      const { id } = action.payload;
      const dragon = state.find((item) => item.id === id);
      if (dragon) {
        dragon.reserved = false;
      }
    },
  },
});

export const { setDragons, reserveDragon, cancelDragonReservation } = dragonsSlice.actions;
export default dragonsSlice.reducer;
