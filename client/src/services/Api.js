const axios = require('axios');

export default () => {
    return axios.create({
        baseURL : `http://localhost:8082/`
    })
}