import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./slices/slices";

export const store = configureStore({
    reducer: {
        tracks: tracksReducer,
    }
})