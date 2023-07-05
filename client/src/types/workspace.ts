export interface WorkspaceState {
  file: any;
  draft: any;
}

export enum WorkspaceActionTypes {
  SET_DATA_FILE = "SET_DATA_FILE",
  UPDATE_DRAFT = "UPDATE_DRAFT",
}

interface SetDataFileAction {
  type: WorkspaceActionTypes.SET_DATA_FILE;
  payload: any;
}

interface UpdateDraftAction {
  type: WorkspaceActionTypes.UPDATE_DRAFT;
  payload: any;
}

export type WorkspaceAction = SetDataFileAction | UpdateDraftAction;
