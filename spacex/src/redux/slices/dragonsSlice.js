import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dragons: [],
 
};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    setDragons: (state, action) => {
      state.dragons = action.payload;
    },

  },
});

export const { setDragons } = dragonsSlice.actions;
export const selectDragons = (state) => state.dragons.dragons;

export default dragonsSlice.reducer;
