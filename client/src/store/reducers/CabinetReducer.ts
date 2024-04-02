import {
  CabinetState,
  CabinetActionTypes,
  CabinetAction,
} from "../../types/cabinet";

const initialState: CabinetState = {
  lawyerTabs: [
    {
      id: 0,
      name: "Contracts",
      iconPath: "/static/images/contract_icon.png",
      iconml: "14px",
      textml: "11px",
    },
    {
      id: 1,
      name: "Workspace",
      iconPath: "/static/images/workspace_icon.png",
      iconml: "10px",
      textml: "10px",
    },
    {
      id: 2,
      name: "Support",
      iconPath: "/static/images/support_icon.png",
      iconml: "13px",
      textml: "13px",
    },
    {
      id: 3,
      name: "Settings",
      iconPath: "/static/images/setting_icon.png",
      iconml: "12px",
      textml: "11px",
    },
  ],
  customerTabs: [
    {
      id: 0,
      name: "Contracts",
      iconPath: "/static/images/contract_icon.png",
      iconml: "14px",
      textml: "11px",
    },
    {
      id: 1,
      name: "Support",
      iconPath: "/static/images/support_icon.png",
      iconml: "13px",
      textml: "13px",
    },
    {
      id: 2,
      name: "Settings",
      iconPath: "/static/images/setting_icon.png",
      iconml: "12px",
      textml: "11px",
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
