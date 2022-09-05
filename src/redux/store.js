import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import reducerBook from "./reducers/reducerBook";
import reducerFetchBook from "./reducers/reducerFetchBook";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    library: reducerBook,
    search: reducerFetchBook
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;