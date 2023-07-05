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
      iconPath: "/images/contract_icon.png",
      iconml: "14px",
      textml: "11px",
    },
    {
      id: 1,
      name: "Workspace",
      iconPath: "/images/workspace_icon.png",
      iconml: "10px",
      textml: "10px",
    },
    {
      id: 2,
      name: "Support",
      iconPath: "/images/support_icon.png",
      iconml: "13px",
      textml: "13px",
    },
    {
      id: 3,
      name: "Setting",
      iconPath: "/images/setting_icon.png",
      iconml: "12px",
      textml: "11px",
    },
  ],
  customerTabs: [
    {
      id: 0,
      name: "Contracts",
      iconPath: "/images/contract_icon.png",
      iconml: "14px",
      textml: "11px",
    },
    {
      id: 1,
      name: "Support",
      iconPath: "/images/support_icon.png",
      iconml: "13px",
      textml: "13px",
    },
    {
      id: 2,
      name: "Setting",
      iconPath: "/images/setting_icon.png",
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
