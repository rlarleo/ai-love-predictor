import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { api } from '@services/apis/api';
import { userReducer } from './user/user.slice';
import { loginReducer } from './login/login.slice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  user: userReducer,
  login: loginReducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
