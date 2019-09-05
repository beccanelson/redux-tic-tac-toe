import { createStore, combineReducers } from "redux";
import gameReducer from "./reducers/game";

const rootReducer = combineReducers({
  game: gameReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);
