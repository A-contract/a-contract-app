import * as AuthActionCreators from "./auth";
import * as LandPageActionCreators from "./landPage";
import * as CabinetActionCreators from "./cabinet";

export default {
    ...AuthActionCreators,
    ...LandPageActionCreators,
    ...CabinetActionCreators,
};
