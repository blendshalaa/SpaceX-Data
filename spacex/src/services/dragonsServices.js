import axios from "axios";


class DragonsServices {

    fetchRockets() {
        const url = 'https://api.spacexdata.com/v3/dragons';
        return axios.get(url);
    }

}

export default new DragonsServices();

