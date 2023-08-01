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
