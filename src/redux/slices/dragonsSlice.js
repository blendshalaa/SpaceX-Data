import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    setDragons: (state, action) => {
      return action.payload.map((dragon) => ({
        ...dragon,
        reserved: state.find((theDragon) => theDragon.id === dragon.id)?.reserved || false
      }))
    },
    reserveDragon: (state, action) => {
      const { id } = action.payload;
      const dragonToUpdate = state.find((dragon) => dragon.id === id);
      if (dragonToUpdate) {
        dragonToUpdate.reserved = true;
      }
    },
    cancelDragonReservation: (state, action) => {
      const { id } = action.payload;
      const dragonToUpdate = state.find((dragon) => dragon.id === id);
      if (dragonToUpdate) {
        dragonToUpdate.reserved = false;
      }
    },
  },
});

export const { setDragons, reserveDragon, cancelDragonReservation } = dragonsSlice.actions;
export default dragonsSlice.reducer;
