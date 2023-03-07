import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { LandPageReducer } from "./LandPageReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  landPage: LandPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
