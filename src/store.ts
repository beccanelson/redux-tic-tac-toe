import { createStore, combineReducers } from "redux";
import boardReducer from "./reducers/board";

const rootReducer = combineReducers({
  board: boardReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);
