export interface AdminPageState {
  adminTabs: any[];
  activeTabId: number;
  registerForm: any;
}

export enum AdminPageActionTypes {
  SET_ACTIVE_ADMIN_PAGE_TAB = "SET_ACTIVE_ADMIN_PAGE_TAB",
  SET_REGISTER_FORM_FIELDS = "SET_REGISTER_FORM_FIELDS",
}

interface SetActiveAdminPageTabAction {
  type: AdminPageActionTypes.SET_ACTIVE_ADMIN_PAGE_TAB;
  payload: number;
}

interface SetRegisterFormFieldsAction {
  type: AdminPageActionTypes.SET_REGISTER_FORM_FIELDS;
  payload: number;
}

export type AdminPageAction =
  | SetActiveAdminPageTabAction
  | SetRegisterFormFieldsAction;
