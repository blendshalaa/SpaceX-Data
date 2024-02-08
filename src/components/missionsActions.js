import { fetchMission } from '../services/missionsServices';
import { setMissions, joinMissionAction, leaveMissionAction } from '../redux/slices/missionsSlice';

export const fetchMissionsData = () => async dispatch => {
    try {
        const response = await fetchMission();
        dispatch(setMissions(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const joinMission = missionId => dispatch => {
    dispatch(joinMissionAction(missionId));
};

export const leaveMission = missionId => dispatch => {
    dispatch(leaveMissionAction(missionId));
};
