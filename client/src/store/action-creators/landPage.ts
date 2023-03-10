import { Dispatch } from "redux";
import { LandPageAction, LandPageActionTypes } from "../../types/landPage";

export const setActiveLandPageTab = (id: number) => {
    return (dispatch: Dispatch<LandPageAction>) => {
        dispatch({
            type: LandPageActionTypes.SET_ACTIVE_LANDPAGE_TAB,
            payload: id,
        });
    };
};
