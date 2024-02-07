// dragonsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: [],
  reducers: {
    setDragons: (state, action) => {
      const dragons = action.payload.map((item) => ({
        id: item.id,
        name: item.name,
        type: item.type,
        flickr_images: item.flickr_images,
        reserved: false,
      }));

      return dragons;
    },
    setReserveDragon: (state, action) => {
      const { id } = action.payload;
      const tempDragons = state.map((dragon) => {
        if (dragon.id === id) {
          return { ...dragon, reserved: true };
        }
        return dragon;
      });

      return tempDragons;
    },
    setCancelDragonReservation: (state, action) => {
      const { id } = action.payload;
      const tempDragons = state.map((dragon) => {
        if (dragon.id === id) {
          return { ...dragon, reserved: false };
        }
        return dragon;
      });

      return tempDragons;
    },
  },
});

export const { setDragons, setReserveDragon, setCancelDragonReservation } = dragonsSlice.actions;
export default dragonsSlice.reducer;
