import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./reducers/indexReducers"

export default configureStore({
    reducer: {
        tracks: tracksReducer,
    }
})