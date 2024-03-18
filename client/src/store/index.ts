import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
import { thunk } from "redux-thunk";

// Определите начальное состояние вашего приложения
const initialState = {};

export const store = createStore(
  rootReducer,
  initialState, // передайте начальное состояние вторым аргументом
  composeWithDevTools(applyMiddleware(thunk))
);
