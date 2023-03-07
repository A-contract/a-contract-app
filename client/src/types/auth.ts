export interface AuthState {
  forms: any[];
  activeFormId: number;
}

export enum AuthActionTypes {
  SET_ACTIVE_FORM = "SET_ACTIVE_FORM",
}

interface SetActiveFormAction {
  type: AuthActionTypes.SET_ACTIVE_FORM;
  payload: number;
}

export type AuthAction = SetActiveFormAction;
