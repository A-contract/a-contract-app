import { Dispatch } from "redux";
import { AuthAction, AuthActionTypes } from "../../types/auth";

export const setActiveForm = (id: number) => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: AuthActionTypes.SET_ACTIVE_FORM, payload: id });
  };
};
