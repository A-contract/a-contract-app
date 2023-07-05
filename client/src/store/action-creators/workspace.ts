import { Dispatch } from "redux";
import { WorkspaceAction, WorkspaceActionTypes } from "@/types/workspace";

export const setDataFile = (file: any) => {
  return (dispatch: Dispatch<WorkspaceAction>) => {
    dispatch({ type: WorkspaceActionTypes.SET_DATA_FILE, payload: file });
  };
};

export const updateDraft = (content: any) => {
  return (dispatch: Dispatch<WorkspaceAction>) => {
    dispatch({ type: WorkspaceActionTypes.UPDATE_DRAFT, payload: content });
  };
};
