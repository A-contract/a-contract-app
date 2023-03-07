import {
  LandPageAction,
  LandPageActionTypes,
  LandPageState,
} from "../../types/landPage";

const initialState: LandPageState = {
  tabs: [
    {
      id: 0,
      name: "Analyse contract",
    },
    {
      id: 1,
      name: "Tariffs",
    },
    {
      id: 2,
      name: "Support",
    },
  ],
  activeTabId: 0,
};

export const LandPageReducer = (
  state = initialState,
  action: LandPageAction
): LandPageState => {
  switch (action.type) {
    case LandPageActionTypes.SET_ACTIVE_TAB:
      return {
        ...state,
        activeTabId: action.payload,
      };
    default:
      return state;
  }
};
