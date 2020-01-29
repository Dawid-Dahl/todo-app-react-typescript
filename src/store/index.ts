import {createStore, combineReducers} from "redux";
import {reducer} from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({reducer});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
