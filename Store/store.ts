import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { auth } from "./Query/Auth";
import UserReducer from "./Slices/User";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "persist",
  storage,
};


const reducers = combineReducers({
  User: UserReducer,
  [auth.reducerPath]: auth.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefault) => getDefault({
        serializableCheck: false})
        .concat(auth.middleware),
  });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(store);
