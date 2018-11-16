import axios from "axios";
const ROOT_URL = "http://www.mocky.io/v2/5bed93cf3300007938a29748";
export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers() {
    const request = axios.get(ROOT_URL);

    return {
        type: FETCH_USERS,
        payload: request
    }
}