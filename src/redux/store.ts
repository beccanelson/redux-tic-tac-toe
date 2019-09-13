import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import gameReducer from "./reducers/game";

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  game: gameReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
