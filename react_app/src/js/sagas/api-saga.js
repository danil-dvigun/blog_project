import { takeEvery, call, put } from "redux-saga/effects";
import '@babel/polyfill';
import axios from "axios";

export default function* watcherSaga() {
    yield takeEvery("GET_USER", userSaga);
    yield takeEvery("GET_POSTS", postsSaga);
}

function* userSaga() {
    try {
        const payload = yield call(getData);
        yield put({ type: "USER_LOADED", payload: payload.data });
    } catch (e) {
        yield put({ type: "USER_ERRORED", payload: e });
    }
}

function* postsSaga() {
    try {
        const payload = yield call(getPosts);
        yield put({ type: "POSTS_LOADED", payload: payload.data });
    } catch (e) {
        yield put({ type: "POSTS_ERRORED", payload: e });
    }
}

function getData() {
    return axios({
        method: 'get',
        url: '/api/user',
        headers:{
            Authorization: localStorage.getItem('Authorization')
        }
    })
}

function getPosts() {
    return axios({
        method: 'get',
        url: '/api/posts',
    })
}