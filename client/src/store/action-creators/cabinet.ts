import { Dispatch } from "redux";
import { CabinetAction, CabinetActionTypes } from "../../types/cabinet";

export const setActiveCabinetTab = (id: number) => {
    return (dispatch: Dispatch<CabinetAction>) => {
        dispatch({ type: CabinetActionTypes.SET_ACTIVE_CABINET_TAB, payload: id });
    };
};
