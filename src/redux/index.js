import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./reducers/userReducer";
import { watcherGetUserSaga } from "./saga/getUserSaga";

const reducers = combineReducers({
  userReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherGetUserSaga);
export default store;
