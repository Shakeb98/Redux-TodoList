import { combineReducers, legacy_createStore } from "redux";
import toReducer from "../reducer/toReducer";

const rootReducer = combineReducers({
    toReducer,
});

const store = legacy_createStore(rootReducer)

export default store
