import axios from "axios";

class DragonsServices {
    fetchDragons() {
        const url = 'https://api.spacexdata.com/v3/dragons';
        return axios.get(url);
    }
}


export const fetchDragons = () => {
    return new DragonsServices().fetchDragons();
};
