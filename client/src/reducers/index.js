import { combineReducers } from "redux";
import currentUserReducer from "./currentUser";
import authReducer from "./auth";
import historyReducer from "./history";
import watchLaterReducer from "./watchLater";
import likedVideoReducer from "./likedVideo";
import usersReducer from "./users";
import currentUserProfileReducer from "./currentUserProfile";
import videoReducer from "./video";
import commentReducer from "./comments";

export default combineReducers({
  authReducer,
  currentUserReducer,
  usersReducer,
  currentUserProfileReducer,
  videoReducer,
  historyReducer,commentReducer,
  watchLaterReducer,likedVideoReducer
});
