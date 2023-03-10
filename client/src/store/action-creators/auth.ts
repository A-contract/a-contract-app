import { Dispatch } from "redux";
import { AuthAction, AuthActionTypes } from "../../types/auth";

export const setActiveAuthForm = (id: number) => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({ type: AuthActionTypes.SET_ACTIVE_AUTH_FORM, payload: id });
    };
};
