import { AuthState, AuthActionTypes, AuthAction } from "../../types/auth";

const initialState: AuthState = {
  forms: [
    {
      id: 0,
      name: "Sign In",
    },
    {
      id: 1,
      name: "Sign Up",
    },
  ],
  activeFormId: 0,
};

export const AuthReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_ACTIVE_FORM:
      return {
        ...state,
        activeFormId: action.payload,
      };
    default:
      return state;
  }
};
