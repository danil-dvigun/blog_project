import { takeEvery, call, put } from "redux-saga/effects";
import '@babel/polyfill';
import axios from "axios";

export default function* watcherSaga() {
    yield takeEvery("GET_USER", workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(getData);
        yield put({ type: "USER_LOADED", payload: payload.data });
    } catch (e) {
        yield put({ type: "USER_ERRORED", payload: e });
    }
}

function getData() {
    /*console.log("запрос")*/
    return axios({
        method: 'get',
        url: '/api/user',
        headers:{
            Authorization: localStorage.getItem('Authorization')
        }
        })
}