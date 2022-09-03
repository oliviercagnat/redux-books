import { combineReducers, legacy_createStore as createStore } from "redux";
import reducerBook from "./reducers/reducerBook";

const rootReducer = combineReducers({
    library: reducerBook
    }
);

const store = createStore(rootReducer);

export default store;