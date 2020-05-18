import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./errors";
import auth from "./auth";

export default combineReducers({
  leadReducer: leads,
  errorsReducer: errors,
  authReducer: auth,
});
