import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signup from "./reducer/signup";
import singin from "./reducer/signin";
import User from "./reducer/user";
import licenses from "./reducer/licenses";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

// export const store = configureStore({
//   reducer: {
//     singup: SingUp,
//     singin: SingIn,
//     user: User,
//   },
// });

const appReducer = combineReducers({
  signup: signup,
  signin: singin,
  user: User,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
