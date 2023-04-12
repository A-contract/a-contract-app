export interface CabinetState {
  lawyerTabs: any[];
  customerTabs: any[];
  activeTabId: number;
}

export enum CabinetActionTypes {
  SET_ACTIVE_CABINET_TAB = "SET_ACTIVE_CABINET_TAB",
}

interface SetActiveCabinetTabAction {
  type: CabinetActionTypes.SET_ACTIVE_CABINET_TAB;
  payload: number;
}

export type CabinetAction = SetActiveCabinetTabAction;
