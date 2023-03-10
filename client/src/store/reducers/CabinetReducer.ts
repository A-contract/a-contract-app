import {
    CabinetState,
    CabinetAction,
    CabinetActionTypes,
} from "../../types/cabinet";

const initialState: CabinetState = {
    tabs: [
        {
            id: 0,
            name: "Contracts",
        },
        {
            id: 1,
            name: "Support",
        },
        {
            id: 2,
            name: "Setting",
        },
    ],
    activeTabId: 0,
};

export const CabinetReducer = (
    state = initialState,
    action: CabinetAction
): CabinetState => {
    switch (action.type) {
        case CabinetActionTypes.SET_ACTIVE_CABINET_TAB:
            return {
                ...state,
                activeTabId: action.payload,
            };
        default:
            return state;
    }
};
