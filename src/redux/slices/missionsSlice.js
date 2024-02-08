import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    missions: [],
};

export const missionSlice = createSlice({
    name: 'missions',
    initialState,
    reducers: {
        setMissions: (state, action) => {
            state.missions = action.payload;
        },
        joinMissionAction: (state, action) => {
            const missionId = action.payload;
            state.missions = state.missions.map(mission =>
                mission.mission_id === missionId ? { ...mission, reserved: true } : mission
            );
        },
        leaveMissionAction: (state, action) => {
            const missionId = action.payload;
            state.missions = state.missions.map(mission =>
                mission.mission_id === missionId ? { ...mission, reserved: false } : mission
            );
        },
    },
});

export const selectMissions = state => state.missions.missions;

export const { setMissions, joinMissionAction, leaveMissionAction } = missionSlice.actions;

export default missionSlice.reducer;
