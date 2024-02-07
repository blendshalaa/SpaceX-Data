import axios from "axios";


class RocketServices {

    fetchRockets() {
        const url = 'https://api.spacexdata.com/v3/rockets';
        return axios.get(url);
    }

}

export default new RocketServices();




