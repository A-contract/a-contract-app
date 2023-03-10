export interface LandPageState {
  tabsDesktop: any[];
  tabsMobile: any[];
  activeTabId: number;
}

export enum LandPageActionTypes {
  SET_ACTIVE_LANDPAGE_TAB = "SET_ACTIVE_LANDPAGE_TAB",
}

interface SetActiveLandPageTabAction {
  type: LandPageActionTypes.SET_ACTIVE_LANDPAGE_TAB;
  payload: number;
}

export type LandPageAction = SetActiveLandPageTabAction;
