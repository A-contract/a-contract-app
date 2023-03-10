import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { CabinetReducer } from "./CabinetReducer";
import { LandPageReducer } from "./LandPageReducer";

export const rootReducer = combineReducers({
    auth: AuthReducer,
    landPage: LandPageReducer,
    cabinet: CabinetReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
