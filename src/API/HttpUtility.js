import axios from 'axios';

export default class HttpUtility {

    static get(endpoint, params) {
        const request = axios.get(endpoint, params);
        return request
            .then(result => {
                return result;
            })
            .catch(error => {
                console.log(error);
                throw new Error(error);
            });
        }
    }
