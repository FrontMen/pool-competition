const BASE_URL = "http://justus.local.nl:3000/api",

    POST_OPTIONS = {
        credentials: "include",
        mode: "cors",
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }
    },

    GET_OPTIONS = {
        credentials: "include",
        mode: "cors"
    };

class PoolApi {
    constructor() {}

    isUser() {
        return fetch(`${BASE_URL}/is-user`, GET_OPTIONS);
    }

    login(data) {
        return fetch(`${BASE_URL}/login`, post(data));
    }
    createUser(data){
        return fetch(`${BASE_URL}/users/`, post(data));
    }
}

export default new PoolApi();

function post(data) {
    return Object.assign({}, POST_OPTIONS, {body: JSON.stringify(data)});
}