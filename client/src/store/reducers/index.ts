import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { CabinetReducer } from "./CabinetReducer";
import { LandPageReducer } from "./LandPageReducer";
import { WorkspaceReducer } from "./WorkspaceReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  landPage: LandPageReducer,
  cabinet: CabinetReducer,
  workspace: WorkspaceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
