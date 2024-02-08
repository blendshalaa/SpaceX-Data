import { createSlice, produce } from '@reduxjs/toolkit';

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
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state[index].reserved = true;
      }
    },
    cancelDragonReservation: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state[index].reserved = false;
      }
    },
  },
});

export const { setDragons, reserveDragon, cancelDragonReservation } = dragonsSlice.actions;
export default dragonsSlice.reducer;
