import { ADD_POST, GET_USER } from "../constants/action-types";

export function addPost(payload) {
    return { type: ADD_POST, payload }
}

export function getUser() {
    return { type: GET_USER }
}