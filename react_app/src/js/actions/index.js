import { GET_USER, GET_POSTS } from "../constants/action-types";

export function getUser() {
    return { type: GET_USER }
}

export function getPosts() {
    return { type: GET_POSTS }
}