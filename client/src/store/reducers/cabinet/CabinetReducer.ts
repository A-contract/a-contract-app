import { CabinetState, CabinetAction } from "../../../types/cabinet";

const initialState: CabinetState = {
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

export const CabinetReducer = (
  state = initialState
  //action: CabinetAction
): CabinetState => {
  //switch (action.type) {
  //default:
  return state;
  //}
};
