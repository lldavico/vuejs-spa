import axios from 'axios';

async function getData(path) {
    await axios
        .get(`http://localhost:8000/${path}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return err
        }
        )
}

export default {
    getData,
}