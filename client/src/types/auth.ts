export interface AuthState {
    forms: any[];
    activeFormId: number;
}

export enum AuthActionTypes {
    SET_ACTIVE_AUTH_FORM = "SET_ACTIVE_AUTH_FORM",
}

interface SetActiveFormAction {
    type: AuthActionTypes.SET_ACTIVE_AUTH_FORM;
    payload: number;
}

export type AuthAction = SetActiveFormAction;
