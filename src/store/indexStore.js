import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './slices/slices'
import authReducers from "./slices/AuthorizationSlice";
import { tracksQuery } from '../serviceQuery/tracks'
import { tokenQuery } from '../serviceQuery/token'

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    auth: authReducers,
    [tracksQuery.reducerPath]: tracksQuery.reducer,
    [tokenQuery.reducerPath]: tokenQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(tracksQuery.middleware)
      .concat(tokenQuery.middleware),
})
