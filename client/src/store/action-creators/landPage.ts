import { Dispatch } from "redux";
import { LandPageAction, LandPageActionTypes } from "../../types/landPage";

export const setActiveTab = (id: number) => {
  return (dispatch: Dispatch<LandPageAction>) => {
    dispatch({ type: LandPageActionTypes.SET_ACTIVE_TAB, payload: id });
  };
};
