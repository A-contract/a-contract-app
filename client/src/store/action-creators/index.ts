import * as AuthActionCreators from "./auth";
import * as LandPageActionCreators from "./landPage";
import * as CabinetActionCreators from "./cabinet";
import * as WorkspaceActionCreators from "./workspace";
import * as AdminPageActionCreators from "./adminPage";

const actionCreators = {
  ...AuthActionCreators,
  ...LandPageActionCreators,
  ...CabinetActionCreators,
  ...WorkspaceActionCreators,
  ...AdminPageActionCreators,
};

export default actionCreators;
