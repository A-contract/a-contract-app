import {
  AdminPageAction,
  AdminPageActionTypes,
  AdminPageState,
} from "@/types/adminPage";

const initialState: AdminPageState = {
  adminTabs: [
    {
      id: 0,
      name: "Users",
      iconPath: "/images/contract_icon.png",
      iconml: "14px",
      textml: "11px",
    },
  ],
  activeTabId: 0,

  registerForm: {
    role: {
      value: "",
      isValid: true,
    },
    name: {
      value: "",
      isValid: true,
    },
    surname: {
      value: "",
      isValid: true,
    },
    email: {
      value: "",
      isValid: true,
    },
  },
};

export const AdminPageReducer = (
  state = initialState,
  action: AdminPageAction
): AdminPageState => {
  switch (action.type) {
    case AdminPageActionTypes.SET_ACTIVE_ADMIN_PAGE_TAB:
      return {
        ...state,
        activeTabId: action.payload,
      };
    case AdminPageActionTypes.SET_REGISTER_FORM_FIELDS:
      return {
        ...state,
        registerForm: action.payload,
      };
    default:
      return state;
  }
};
