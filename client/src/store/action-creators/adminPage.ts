import { AdminPageAction, AdminPageActionTypes } from "@/types/adminPage";
import { Dispatch } from "redux";

export const setActiveAdminPageTab = (id: number) => {
  return (dispatch: Dispatch<AdminPageAction>) => {
    dispatch({
      type: AdminPageActionTypes.SET_ACTIVE_ADMIN_PAGE_TAB,
      payload: id,
    });
  };
};

export const setRegisterFormFields = (registerForm: any) => {
  return (dispatch: Dispatch<AdminPageAction>) => {
    dispatch({
      type: AdminPageActionTypes.SET_REGISTER_FORM_FIELDS,
      payload: registerForm,
    });
  };
};
