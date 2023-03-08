export interface LandPageState {
  tabsDesktop: any[];
  tabsMobile: any[];
  activeTabId: number;
}

export enum LandPageActionTypes {
  SET_ACTIVE_TAB = "SET_ACTIVE_TAB",
}

interface SetActiveTabAction {
  type: LandPageActionTypes.SET_ACTIVE_TAB;
  payload: number;
}

export type LandPageAction = SetActiveTabAction;
