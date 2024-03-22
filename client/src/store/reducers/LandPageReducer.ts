import {
  LandPageAction,
  LandPageActionTypes,
  LandPageState,
} from "../../types/landPage";

const initialState: LandPageState = {
  tabsDesktop: [
    {
      id: 0,
      name: "Analyse contract",
      href: "/#analyse-contract",
      target: "",
      color: "secondary.light",
    },
    {
      id: 1,
      name: "Tariffs",
      href: "/#tariffs",
      target: "",
      color: "secondary.light",
    },
    {
      id: 2,
      name: "Support",
      href: "/#support",
      target: "",
      color: "secondary.light",
    },
    {
      id: 3,
      name: "Blog",
      href: "/blog",
      target: "/blog",
      color: "secondary.light",
    },
  ],
  tabsMobile: [
    {
      id: 0,
      name: "Analyse contract",
      href: "/#analyse-contract",
      target: "",
      color: "secondary.main",
      marginTop: "",
      borderTop: "",
      divider: false,
    },
    {
      id: 1,
      name: "Tariffs",
      href: "/#tariffs",
      target: "",
      color: "secondary.main",
      marginTop: "",
      borderTop: "",
      divider: false,
    },
    {
      id: 2,
      name: "Support",
      href: "/#support",
      target: "",
      color: "secondary.main",
      marginTop: "",
      borderTop: "",
      divider: true,
    },
    {
      id: 3,
      name: "Blog",
      href: "/blog",
      target: "_blank",
      color: "secondary.main",
      marginTop: "",
      borderTop: "",
      divider: true,
    },
  ],
  activeTabId: 0,
};

export const LandPageReducer = (
  state = initialState,
  action: LandPageAction
): LandPageState => {
  switch (action.type) {
    case LandPageActionTypes.SET_ACTIVE_LANDPAGE_TAB:
      return {
        ...state,
        activeTabId: action.payload,
      };
    default:
      return state;
  }
};
