import {ADD_POST} from "../constants/action-types";

const initialState = {
    posts: [],
    user: {name: "NoOne", userRoles:[]}
};

function rootReducer(state = initialState, action) {
    if (action.type === "POSTS_LOADED") {
        return Object.assign({}, state, {
            posts: action.payload
        });
    }
    if (action.type === "POSTS_ERRORED") {
        return Object.assign({}, state, {
            posts: []
        });
    }
    if (action.type === "USER_LOADED") {
        console.log(action.payload)
        return Object.assign({}, state, {
            user: action.payload
        });
    }
    if (action.type === "USER_ERRORED") {
        return Object.assign({}, state, {
            user: {name: "NoOne", userRoles:[]}
        });
    }
    return state;
}

export default rootReducer;