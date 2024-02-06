import axios from "axios";


class missionsServices {

    fetchRockets() {
        const url = 'https://api.spacexdata.com/v3/missions';
        return axios.get(url);
    }

}

export default new missionsServices();

