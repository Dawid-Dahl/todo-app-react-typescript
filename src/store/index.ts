import {createStore, combineReducers} from "redux";
import {todoReducer} from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({todoReducer});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
