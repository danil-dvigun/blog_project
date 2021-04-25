import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import createSagaMiddleware from 'redux-saga'
import mySaga from '../sagas/api-saga'

// создаем мидлвар saga
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// затем запускаем saga
sagaMiddleware.run(mySaga)

export default store;