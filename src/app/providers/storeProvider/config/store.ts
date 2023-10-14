import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {postService} from "../../../../widgets/postsList";

// import {userService} from "../services/UserService";

// import UserReducer from "./reducers/UserSlice";

export const rootReducer = combineReducers({
  [postService.reducerPath]: postService.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postService.middleware),
  });
};

export const store = setupStore();
