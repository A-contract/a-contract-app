import { combineReducers } from "redux";
import { AuthReducer } from "./auth/AuthReducer";
import { LandPageReducer } from "./landPage/LandPageReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  landPage: LandPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
