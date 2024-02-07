import { createSlice } from "@reduxjs/toolkit";

const rocketsSlice = createSlice({
    name: "rockets",
    initialState: [],
    reducers: {
        setRockets: (state, action) => {
            const rockets = action.payload.map((item) => ({
                id: item.id,
                rocket_name: item.rocket_name,
                description: item.description,
                flickr_images: item.flickr_images,
                reserved: false,
            }));

            return rockets;
        },
        setReserveRocket: (state, action) => {
            const { id } = action.payload;
            const tempRockets = state.map((rocket) => {
                if (rocket.id === id) {
                    return { ...rocket, reserved: true };
                }
                return rocket;
            });

            return tempRockets;
        },
        setCancelReservation: (state, action) => {
            const { id } = action.payload;
            const tempRockets = state.map((rocket) => {
                if (rocket.id === id) {
                    return { ...rocket, reserved: false };
                }
                return rocket;
            });

            return tempRockets;
        },
    },
});

export const { setRockets, setReserveRocket, setCancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
