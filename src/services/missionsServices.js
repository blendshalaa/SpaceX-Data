import axios from "axios";

class missionsServices {

    fetchMission() {
        const url = 'https://api.spacexdata.com/v3/missions';
        return axios.get(url);
    }
}


const missionsServiceInstance = new missionsServices();
export const fetchMission = missionsServiceInstance.fetchMission.bind(missionsServiceInstance);
