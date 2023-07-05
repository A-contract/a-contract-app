import {
  WorkspaceState,
  WorkspaceAction,
  WorkspaceActionTypes,
} from "../../types/workspace";

const initialState: WorkspaceState = {
  file: {
    id: null,
    number: null,
    name: null,
    content: null,
    progressStatus: null,
  },
  draft: {
    content: null,
    edited: false,
  },
};

export const WorkspaceReducer = (
  state = initialState,
  action: WorkspaceAction
): WorkspaceState => {
  switch (action.type) {
    case WorkspaceActionTypes.SET_DATA_FILE:
      return {
        ...state,
        file: action.payload,
      };
    case WorkspaceActionTypes.UPDATE_DRAFT:
      return {
        ...state,
        draft: action.payload,
      };
    default:
      return state;
  }
};
