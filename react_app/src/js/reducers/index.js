import {ADD_POST} from "../constants/action-types";

const initialState = {
    posts: [],
    userName: "NoOne"
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_POST) {
        /*state.posts.push(action.payload);*/
        return Object.assign({}, state, {
            posts: state.posts.concat(action.payload)
        });
    }
    if (action.type === "USER_LOADED") {
        return Object.assign({}, state, {
            userName: action.payload.user
        });
    }
    if (action.type === "USER_ERRORED") {
        return Object.assign({}, state, {
            userName: state.userName = "NoOne"
        });
    }
    return state;
}

export default rootReducer;