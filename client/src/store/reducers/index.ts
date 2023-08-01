import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { CabinetReducer } from "./CabinetReducer";
import { LandPageReducer } from "./LandPageReducer";
import { WorkspaceReducer } from "./WorkspaceReducer";
import { AdminPageReducer } from "./AdminPageReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  landPage: LandPageReducer,
  cabinet: CabinetReducer,
  workspace: WorkspaceReducer,
  adminPage: AdminPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
