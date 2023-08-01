export interface AdminPageState {
  adminTabs: any[];
  activeTabId: number;
}

export enum AdminPageActionTypes {
  SET_ACTIVE_ADMIN_PAGE_TAB = "SET_ACTIVE_ADMIN_PAGE_TAB",
}

interface SetActiveAdminPageTabAction {
  type: AdminPageActionTypes.SET_ACTIVE_ADMIN_PAGE_TAB;
  payload: number;
}

export type AdminPageAction = SetActiveAdminPageTabAction;
